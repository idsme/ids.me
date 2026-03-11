# =============================================================================
# Stage 1: Install dependencies
# =============================================================================
FROM node:20-alpine AS deps

WORKDIR /app

# Native deps needed by sharp and @resvg/resvg-js
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json .npmrc ./

# ci = reproducible installs from lockfile; skip husky (no .git in container)
RUN npm ci --ignore-scripts \
    && npm rebuild sharp \
    && npm rebuild @resvg/resvg-js

# =============================================================================
# Stage 2: Build the Astro site + Pagefind index
# =============================================================================
FROM node:20-alpine AS build

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Astro telemetry (matches CI env)
ENV ASTRO_TELEMETRY_DISABLED=1

# Build: astro build && pagefind --site dist  (from package.json "build" script)
RUN npm run build

# =============================================================================
# Stage 3: Serve with nginx
# =============================================================================
FROM nginx:stable-alpine AS runtime

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

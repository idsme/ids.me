import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Ids Achterhof (@idsme)

Enterprise Architect building scalable digital solutions. Bridging technology and business with pragmatic, innovative approaches.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- X/Twitter: [@idsmedev](https://x.com/idsmedev)
- GitHub: [@idsme](https://github.com/idsme)
- LinkedIn: [idsachterhof](https://www.linkedin.com/in/idsachterhof/)
- Email: idsmedev@gmail.com

---

*This is the markdown-only version of idsme.dev. Visit [idsme.dev](https://idsme.dev) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

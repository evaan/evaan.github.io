import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: "Evan's Blog",
    description: "A blog for when I post once a decade.",
    site: "https://evaan.dev",
    trailingSlash: false,
    items: await pagesGlobToRssItems(
        import.meta.glob('./*.mdx'),
    ),
  });
}
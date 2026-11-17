// Sitemap voor Google: /sitemap.xml
// Bevat alle pagina's uit src/data/seo.ts, in het Nederlands en Engels, met de koppeling tussen de twee talen.
import { SITE_URL, pageSeo } from '../data/seo';

const langs = ['nl', 'en'] as const;
const urlFor = (lang: string, route: string) => `${SITE_URL}/${lang}${route === '/' ? '/' : `${route}/`}`;

export function GET() {
  const urls = Object.keys(pageSeo).flatMap((route) =>
    langs.map((lang) => {
      const alternates = langs
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlFor(l, route)}" />`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('nl', route)}" />`)
        .join('\n');
      return `  <url>\n    <loc>${urlFor(lang, route)}</loc>\n${alternates}\n  </url>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

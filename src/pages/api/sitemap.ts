import { NextApiRequest, NextApiResponse } from 'next';
import { locations } from '../../data/locations';
import { featured } from '../../data/featured';

const generateSitemapXML = () => {
  const allData = [...locations, ...featured];

  const urls = allData.map((item) => ({
    loc: `https://exploringengland.uk${item.link}`,
    lastmod: new Date().toISOString(),
  }));

  const sitemapXML = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
          <url>
            <loc>${url.loc}</loc>
            <lastmod>${url.lastmod}</lastmod>
          </url>
        `
        )
        .join('')}
    </urlset>
  `;

  return sitemapXML.trim();
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const sitemapXML = generateSitemapXML();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXML);
  res.end();
};

const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
  const baseUrl = 'https://ivetstore.com';
  const today = new Date().toISOString().split('T')[0];

  // Define static URLs
  const staticUrls = [
    {
      url: '/',
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: '/products',
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/products/i-cal-plus',
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/products/i-min-plus',
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '../../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

try {
  generateSitemap();
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
} 
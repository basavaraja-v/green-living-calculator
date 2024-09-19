import { SitemapStream, streamToPromise } from 'sitemap'

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://green.heyidb.com`,
    })

    // List of pages
    const pages = [
      { url: '/', changefreq: 'weekly', priority: 1 },
      { url: '/faq', changefreq: 'monthly', priority: 0.8 },
      { url: '/tips', changefreq: 'monthly', priority: 0.8 },
      { url: '/blog', changefreq: 'weekly', priority: 0.9 },
      // Add your blog posts here
      { url: '/blog/10-ways-to-reduce-carbon-footprint', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog/diet-impact-on-environment', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog/sustainable-transportation-guide', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog/eco-friendly-home-guide', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog/importance-of-renewable-energy', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog/reducing-plastic-waste', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog/sustainable-fashion-guide', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog/water-conservation-guide', changefreq: 'monthly', priority: 0.7 },
    ]

    // Create each URL row
    pages.forEach(page => {
      smStream.write(page)
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString()

    // Set response
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })
    res.end(sitemapOutput)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}
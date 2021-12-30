const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

module.exports = withMDX({
  extension: /\.mdx?$/,
  options: {
    pageExtensions: ['js', 'jsx', 'mdx'],
    assetPrefix: process.env.NODE_ENV === 'production' ? '/summer' : ''
  },
  async headers() {
    return [
      {
        source: '/scrapbookwidget.js',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }]
      }
    ]
  }
})

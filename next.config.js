module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/summer' : ''
}
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
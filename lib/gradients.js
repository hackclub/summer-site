import theme from '@hackclub/theme'

const cx = c => theme.colors[c] || c

export const gx = (from, to) =>
  `radial-gradient(ellipse farthest-corner at top left, ${cx(from)}, ${cx(to)})`

export const gxText = (from, to) => ({
  color: cx(to),
  '@supports (-webkit-background-clip: text)': {
    backgroundImage: gx(from, to),
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
})

import base from '@hackclub/theme'
import { merge } from 'lodash'

const palette = {
  pink: '#ff0f65',
  orange: '#ffa90f',
  green: '#0fffa9',
  cyan: '#0fddff',
  blue: '#0f65ff'
}

const theme = base

const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`
theme.fonts.heading = `"Phantom Sans", ${fonts}`
theme.fonts.body = `"Phantom Sans", ${fonts}`

theme.letterSpacings.title = '0'
theme.letterSpacings.headline = '0.02em'

theme.badges.primary = {
  display: 'inline-block',
  fontSize: 1,
  px: 3,
  py: 1,
  borderRadius: 'circle',
  fontFamily: 'heading',
  letterSpacing: 'headline',
  textTransform: 'uppercase'
}
theme.badges.lg = {
  ...theme.badges.primary,
  fontSize: [2, 3]
}
theme.badges.header = {
  ...theme.badges.primary,
  fontSize: [1, 2],
  bg: 'background',
  color: 'primary',
  opacity: 0.75,
  ml: [null, null, null],
  ':hover': {
    color: 'accent',
    textShadow: theme => `0 0 12px ${theme.colors.accent}`,
    transform: 'rotate(4deg) scale(1.025)'
  }
}

theme.buttons.outline.borderWidth = 3
theme.buttons.primary.borderRadius = 'circle'
theme.buttons.primary.transition = 'transform .125s ease-in-out'
theme.buttons.primary[':focus,:hover'] = {
  transform: 'scale(1.125) rotate(-8deg)'
}

theme.text.title.color = 'primary'
theme.text.headline.color = 'primary'
theme.text.subheadline.letterSpacing = 'headline'

theme.variants = {}
theme.variants.header = {
  bg: 'sheet',
  pt: 3,
  px: 3,
  pb: [2, 3, 4],
  mb: [4, 5],
  textAlign: 'center',
  h1: {
    variant: 'text.title',
    fontFamily: 'heading',
    fontSize: 5,
    maxWidth: 'narrow',
    mt: 0,
    mx: 'auto'
  }
}
theme.variants.headerLeft = merge(
  { ...theme.variants.header },
  {
    px: 0,
    textAlign: 'left',
    h1: { maxWidth: 'none', mx: 0 },
    'h1 + p': { maxWidth: 'copy', mt: -3, mb: 4, fontSize: 2 }
  }
)
theme.variants.list = {
  columnWidth: 256,
  columnGap: [3, null, 4],
  listStyle: 'none',
  fontSize: 2,
  pl: 0,
  li: {
    breakInside: 'avoid',
    py: 1,
    borderBottom: '1px solid',
    borderBottomColor: 'border'
  }
}

theme.cards.secondary = {
  variant: 'cards.primary',
  bg: 'sheet',
  boxShadow: 'none',
  my: 0,
  strong: {
    variant: 'text.subheadline',
    color: 'orange',
    display: 'block',
    mb: 2
  }
}

theme.cards.primary = {
  bg: 'red',

  strong: {
    variant: 'text.subheadline',
    color: 'orange',
    display: 'block',
    mb: 2
  }
}

export default theme

import base from '@hackclub/theme'
import { merge } from 'lodash'

const theme = base

// Disable dark mode
theme.useColorSchemeMediaQuery = false
theme.colors.modes = {}
theme.colors = merge(theme.colors, {
  pink: '#FF62DC',
  orange: '#FF5B00',
  yellow: '#F7FF00',
  green: '#28FF00',
  cyan: '#00FFFF',
  blue: '#00A4FF',
  purple: '#C210FF',
  black: '#1D201D',
  slate: '#3B413A',
  muted: '#777F76',
  smoke: '#D5D8D5',
  snow: '#F5F5F4'
})

theme.fonts.display = `"Shrikhand", ${theme.fonts.heading}`
theme.fonts.body = `"Baloo 2", ${theme.fonts.heading}`
theme.fonts.heading = theme.fonts.body

theme.fontSizes = [14, 16, 18, 21, 28, 42, 56, 84, 128, 160, 192]

theme.sizes.copy = 720

theme.fontWeights.heading = '400'

theme.lineHeights.subheading = theme.lineHeights.body

theme.buttons.cta = theme.buttons.ctaLg
theme.buttons.cta.background = 'white'
theme.buttons.cta.textTransform = 'unset'

theme.cards.translucent = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'saturate(180%) blur(5px)',
    WebkitBackdropFilter: 'saturate(180%) blur(5px)'
  }
}
/*
theme.cards.translucentDark = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(0, 0, 0, 0.875)',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(0, 0, 0, 0.625)',
    backdropFilter: 'saturate(180%) blur(16px)',
    WebkitBackdropFilter: 'saturate(180%) blur(16px)'
  },
}
*/

theme.forms.input = merge(theme.forms.input, { boxShadow: 'none !important' })
theme.forms.textarea = { variant: 'forms.input' }
theme.forms.label = merge(theme.forms.label, {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  fontSize: 2,
  mb: 0
})
theme.forms.labelCheckbox = {
  variant: 'forms.label',
  flexDirection: 'row !important',
  alignItems: 'center',
  svg: { color: 'muted' }
}

theme.layout.copy.maxWidth = [null, null, 'copyPlus']

theme.letterSpacings = {
  title: '-0.04em',
  headline: '0.008em'
}

theme.text.lead = {
  fontSize: [2, 3]
}
theme.text.eyebrow = {
  color: 'muted',
  fontSize: 4,
  fontWeight: 'bold',
  letterSpacing: 'headline',
  lineHeight: 'subheading',
  textTransform: 'uppercase',
  mt: 0,
  mb: 2
}
theme.text.title.fontFamily = 'display'
theme.text.title.fontSize[0] = 5
theme.text.titleUltra = {
  ...theme.text.title,
  fontFamily: 'display',
  fontSize: [5, 6, 7],
  lineHeight: 0.875
}

theme.text.subtitle.mt = 3

export default theme

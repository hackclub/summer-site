import { Box, Card, Button, Heading, Text } from 'theme-ui'
import Icon from './icon'

const Sheet = () => (
  <Card
    variant="translucent"
    sx={{
      variant: 'layout.container',
      maxWidth: [null, 600, 700],
      borderRadius: 'extra',
      p: [3, 4],
      position: 'relative',
      color: 'black'
    }}
  >
    <Button
      as="a"
      variant="cta"
      href="https://hack.af/som-stickers"
      sx={{
        backgroundImage: t => t.util.gradient('yellow', 'pink'),
        position: 'absolute',
        right: [0, -3],
        top: -3,
        transform: [
          'translateY(-50%) rotate(8deg)',
          'translateX(15%) rotate(12deg)'
        ]
      }}
    >
      Get stickers
    </Button>
    <Text as="p" variant="headline" sx={{ mt: 0, color: 'muted' }}>
      53 years ago, 100,000 people gathered in San&nbsp;Francisco for the Summer
      of Love.
    </Text>
    <Heading
      as="h2"
      variant="title"
      sx={{ color: 'black', span: { color: 'pink', display: 'block' } }}
    >
      Welcome to the{' '}
      <Text as="span" sx={t => t.util.gradientText('orange', 'pink')}>
        Summer of Making.
      </Text>
    </Heading>
    <Text as="p" variant="subtitle" mt={3}>
      It’s not an event or program. It’s a theme for the summer, a challenge to
      every teenager reading this: <strong>What&nbsp;will you make?</strong>
    </Text>
    <Text as="p" variant="subtitle" mt={3}>
      To suppport you, we’re distributing $50,000 in free electronics (thanks
      GitHub!) & building Snapchat streaks for coding—but really Summer
      of&nbsp;Making is about you. If this will be the best summer ever, it’ll
      be because of what you choose to hack on & learn from.
    </Text>
  </Card>
)

const Static = () => (
  <Box
    as="header"
    sx={{
      pt: 6,
      pb: 3,
      px: 3,
      position: 'relative',
      backgroundImage: [
        'radial-gradient(at left top, rgba(247, 255, 0, 0.66), rgb(0, 255, 255, 0.66)), url(https://assets.hackclub.com/log/2020-06-29_flagship_1-sm.jpg)',
        'radial-gradient(at left top, rgba(247, 255, 0, 0.66), rgb(0, 255, 255, 0.66)), url(https://assets.hackclub.com/log/2020-06-29_flagship_1.jpg)'
      ],
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      '@media (hover: hover)': { backgroundAttachment: 'fixed' }
    }}
  >
    <Sheet />
    <Box sx={{ textAlign: 'center', pt: 3, display: ['none', null, 'block'] }}>
      <Icon glyph="down-caret" size={48} color="slate" />
    </Box>
  </Box>
)

export default Static

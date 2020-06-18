import { Box, Card, Button, Heading, Text } from 'theme-ui'
import usePrefersMotion from '../lib/use-prefers-motion'
import useHasMounted from '../lib/use-has-mounted'
import FadeOut from './fade-out'
import SlideUp from './slide-up'

const Sheet = () => (
  <Card
    variant="translucent"
    sx={{
      variant: 'layout.container',
      maxWidth: [null, 660, 660],
      borderRadius: 'extra',
      p: [3, 4],
      color: 'black'
    }}
  >
    <Text as="p" variant="headline" sx={{ maxWidth: 600, mt: 0, color: 'muted' }}>
      53 years ago, 100,000 people gathered in San&nbsp;Francisco for what was later called the Summer of Love.
    </Text>
    <Heading as="h2" variant="title" sx={{ color: 'orange', pb: 2 }}>
      Now, we’ve entered the Hack Club{' '}
      <Text as="span" sx={t => t.util.gradientText('pink', 'orange')}>Summer of Making.</Text>
    </Heading>
    <Text as="p" variant="subtitle" mb={4} sx={{ maxWidth: 600 }}>
      It’s not an event, or a program with a start and end date. It’s a theme for this summer and a challenge to every teenager reading this: What will you make? What will you learn?
    </Text>
    <Button as="a" variant="cta" href="https://hack.af/som-stickers" sx={{ backgroundImage: t => t.util.gradient('yellow', 'pink') }}>
      Get stickers
    </Button>
  </Card>
)

const Static = () => (
  <Box
    as="header"
    sx={{
      py: 6,
      px: 3,
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: 'url(slack-poster.png)',
      backgroundSize: 'cover'
    }}
  >
    <Sheet />
  </Box>
)

const Header = () => {
  const hasMounted = useHasMounted()
  const prefersMotion = usePrefersMotion()
  if (!hasMounted) return <Static />
  if (prefersMotion) {
    return (
      <Box
        as="header"
        sx={{
          py: 6,
          px: 3,
          minHeight: '100vh',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          as="video"
          autoPlay
          muted
          loop
          playsInline
          poster="slack-poster.png"
          duration={2000}
          sx={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            zIndex: -1
          }}
        >
          <source
            src="https://cdn.glitch.com/2d637c98-ed35-417a-bf89-cecc165d7398%2Foutput-no-duplicate-frames.hecv.mp4?v=1590780967658"
            type="video/mp4; codecs=hevc"
          />
          <source
            src="https://cdn.glitch.com/2d637c98-ed35-417a-bf89-cecc165d7398%2Foutput-no-duplicate-frames.webm?v=1590781698834"
            type="video/webm; codecs=vp9,opus"
          />
          <source
            src="https://cdn.glitch.com/2d637c98-ed35-417a-bf89-cecc165d7398%2Foutput-no-duplicate-frames.mov?v=1590781491717"
            type="video/quicktime"
          />
        </Box>
        <FadeOut
          duration={8000}
          sx={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundImage: t => t.util.gradient('yellow', 'cyan'),
            zIndex: -1
          }}
          start={1}
          end={0.85}
        />
        <SlideUp duration={750}>
          <Sheet />
        </SlideUp>
      </Box>
    )
  } else {
    return <Static />
  }
}

export default Header

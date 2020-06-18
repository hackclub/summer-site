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
      maxWidth: [null, 680, 680],
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
      sx={{ color: 'blue', span: { color: 'pink', display: 'block' } }}
    >
      Now, we’re entering the Hack Club{' '}
      <Text as="span" sx={t => t.util.gradientText('orange', 'pink')}>
        Summer of Making.
      </Text>
    </Heading>
    <Text as="p" variant="subtitle" mt={3}>
      It’s not an event, or a program with a start/end date. It’s a theme for
      the summer and a challenge to every teenager reading this: this summer,{' '}
      <strong>what will you make?</strong> What will you learn?
    </Text>
    <Text as="p" variant="subtitle" mt={3}>
      We’re doing a few big things to support you, including giving out $50,000
      in free electronics (thanks GitHub!) and building a Snapchat streaks-like
      system for learning, but really the Summer of&nbsp;Making is about you.
    </Text>
    <Text as="p" variant="subtitle" mt={3}>
      We don’t want to descend from above with a “program” for you to do. If
      this is going to be the best summer ever, it’ll be because of what you all
      choose to hack on & learn from.
    </Text>
  </Card>
)

const Static = () => (
  <Box
    as="header"
    sx={{
      py: 6,
      px: 3,
      position: 'relative',
      backgroundImage: t => t.util.gradient('yellow', 'cyan')
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

export default Static

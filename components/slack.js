import { Box, Container, Button, Heading, Text } from 'theme-ui'
import usePrefersMotion from '../lib/use-prefers-motion'
import useHasMounted from '../lib/use-has-mounted'

const Sheet = () => (
  <Container
    as="article"
    variant="copy"
    sx={{
      'h2,h3,p': { textShadow: 'text' },
      textAlign: [null, 'center'],
      pt: [4, 5],
      pb: [5, 6, 7],
      color: 'white',
      zIndex: 1,
      position: 'relative'
    }}
  >
    <Text as="p" variant="eyebrow" color="cyan">
      Community Slack
    </Text>
    <Heading as="h2" variant="title">
      Friends, mentors, and weekly events on Slack.
    </Heading>
    <Text as="p" variant="subtitle" my={3}>
      You’ll be entering an incredibly welcoming community of over 10K teenager
      makers. All summer, we’re running weekly live events, including AMAs,
      coding workshops, show & tells, office hours, and more.
    </Text>
    <Button
      as="a"
      variant="cta"
      href="https://hackclub.com/slack/"
      target="_blank"
      sx={{
        mt: 3,
        mb: [null, 4, 5],
        bg: 'cyan',
        backgroundImage: t => t.util.gx('cyan', 'blue')
      }}
    >
      Join the Slack
    </Button>
  </Container>
)

const Cover = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundImage: t => t.util.gx('blue', 'purple'),
      opacity: 0.75,
      zIndex: 0
    }}
  />
)

const Static = () => (
  <Box
    as="section"
    id="slack"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url(slack-poster.png)',
      backgroundSize: 'cover'
    }}
  >
    <Cover />
    <Sheet />
  </Box>
)

const Slack = () => {
  const hasMounted = useHasMounted()
  const prefersMotion = usePrefersMotion()
  if (!hasMounted) return <Static />
  if (prefersMotion) {
    return (
      <Box
        as="section"
        id="slack"
        sx={{ overflow: 'hidden', position: 'relative' }}
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
        <Cover />
        <Sheet />
      </Box>
    )
  } else {
    return <Static />
  }
}

export default Slack

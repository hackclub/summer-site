import { Box, Card, Button, Grid, Heading, Text } from 'theme-ui'
import theme from '../lib/theme'
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
      color: 'black'
    }}
  >
    <Heading
      as="h2"
      variant="title"
      sx={{
        ...theme.util.gradientText('cyan', 'blue'),
        lineHeight: 'limit',
        pb: 2
      }}
    >
      Make something amazing this summer.
    </Heading>
    <Text as="p" variant="lead" my={3}>
      <strong>Hack Club Summer of Making</strong> brings 6 weeks of mentorship,
      $50k of hardware grants, weekly get-togethers, & nonstop
      making—culminating in an awards show.
    </Text>
    <Grid columns={[null, 'auto 1fr']} gap={3} sx={{ alignItems: 'center' }}>
      <Button as="a" variant="cta" href="#register">
        Pre-register
      </Button>
      <Text as="p" variant="caption" color="slate">
        Signups open <strong>June 18</strong>
        <br />
        <strong>Ages 13–18</strong>, for students anywhere worldwide
      </Text>
    </Grid>
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
  if (!hasMounted) return Static
  if (prefersMotion) {
    return (
      <Box
        as="header"
        sx={{
          py: 6,
          px: 3,
          minHeight: '100vh',
          overflow: 'hidden',
          position: 'relative'
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
            src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fslack.hevc.mp4?v=1590694006597"
            type="video/mp4; codecs=hevc"
          />
          <source
            src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fslack.webm?v=1590694212094"
            type="video/webm; codecs=vp9,opus"
          />
          <source
            src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fslack.mov?v=1590694211489"
            type="video/quicktime"
          />
        </Box>
        <FadeOut
          duration={8}
          sx={{
            opacity: 0,
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundImage: t => t.util.gradient('yellow', 'orange'),
            zIndex: -1
          }}
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

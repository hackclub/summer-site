import { Box, Image } from 'theme-ui'
import usePrefersMotion from '../lib/use-prefers-motion'
import FadeOut from './fade-out'

const HeaderVideo = () => {
  const prefersMotion = usePrefersMotion()
  if (prefersMotion) {
    return (
      <>
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
            zIndex: -1
          }}
        >
          <source
            src="https://hackclub.github.io/summer-slack-video/slack.mp4"
            type="video/mp4"
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
      </>
    )
  } else {
    return (
      <Image
        alt="Screenshot of Hack Club Slack"
        src="slack-poster.png"
        sx={{
          objectFit: 'cover',
          position: 'absolute',
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1
        }}
      />
    )
  }
}

export default HeaderVideo

import { Box, Card, Container, Flex, Image, Link, Heading } from 'theme-ui'
import usePrefersMotion from '../../lib/use-prefers-motion'
import useHasMounted from '../../lib/use-has-mounted'

const Collab = ({ img, alt, url }) => (
  <Link
    href={url}
    rel="noopener"
    target="_blank"
    sx={{ display: 'block', mx: 3, mb: [3, 4] }}
  >
    <Image
      src={img}
      alt={alt}
      sx={{ maxWidth: [112, 224, 224], maxHeight: [42, 84, 84] }}
    />
  </Link>
)

const Sheet = () => (
  <Box
    sx={{
      position: 'relative',
      zIndex: 9,
      fontSize: [4, 6],
      py: [4, 5, 6],
      textShadow: 'text'
    }}
    className="thank-you-text"
  >
    <Heading
      mb={[3, 4]}
      sx={{ color: 'white', fontSize: [6, 7], fontFamily: 'display' }}
    >
      Thank you for joining!
    </Heading>
    <Heading
      as="h3"
      variant="eyebrow"
      id="about"
      sx={{ color: 'white', mb: [3, 4], mt: [4, 5] }}
    >
      In collaboration with
    </Heading>
    <Flex
      sx={{
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 'auto'
      }}
    >
      <Collab
        alt="GitHub"
        img="https://summer.hackclub.com/sponsors/github.svg"
        url="https://github.com/"
      />
      <Collab
        alt="Adafruit"
        img="https://summer.hackclub.com/sponsors/adafruit.png"
        url="https://adafruit.com/"
      />
      <Collab
        alt="Arduino"
        img="https://summer.hackclub.com/sponsors/arduino.svg"
        url="https://arduino.cc/"
      />
    </Flex>
  </Box>
)

const Cover = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      opacity: 0.9,
      zIndex: 0,
      backgroundImage:
        'radial-gradient(at left top,rgba(247,255,0,0.66),rgb(0,255,255,0.66))'
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
      backgroundImage:
        'url(https://cloud-r135419pm.vercel.app/screenshot_2020-08-30_at_9.17.45_am.png)',
      backgroundSize: 'cover'
    }}
  >
    <Sheet />
    <Cover />
  </Box>
)

const MAINPART = () => {
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
          poster="https://cloud-r135419pm.vercel.app/screenshot_2020-08-30_at_9.17.45_am.png"
          duration={2000}
          sx={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            height: 'auto !important',
            width: '100% !important',
            maxHeight: '56.25vw !important',
            zIndex: -1
          }}
        >
          <source src="https://stream.mux.com/sQNBvox02JMiGWeVF4YzfOyfIcAv6d1fo3sii02GudNXw.m3u8" />
        </Box>
        <Cover />
        <Sheet />
      </Box>
    )
  } else {
    return <Static />
  }
}

export default MAINPART

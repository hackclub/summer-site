import {
  Box,
  IconButton,
  Container,
  Image,
  Text,
  Flex,
  Heading,
  Button,
  Grid,
  Avatar,
  Badge,
  Link as A
} from 'theme-ui'
import { keyframes } from '@emotion/core'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import Icon from '../components/icon'
import Stat from '../components/stat'

import Header from '../components/header'
import SamNote from '../components/sam-note.mdx'

const APPLY_URL = '#register'

const bounce = keyframes`
  0% {
    opacity: 0.75;
    transform: translateX(-50%) translate3d(-100%, 0, 0) rotate(-120deg)
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateZ(0)
  }
`

const Contributor = ({ name, avatar }) => (
  <Flex sx={{ alignItems: 'center' }}>
    <Avatar src={avatar} alt={name} size={64} mr={3} />
    <Box>
      <Text variant="subheadline" as="p" sx={{ mt: 0, mb: 1 }}>
        {name}
      </Text>
      <Badge variant="default" as="span">
        he/him
      </Badge>
    </Box>
  </Flex>
)

const Collab = ({ img, alt }) => (
  <A
    href={`https://${alt
      .toLowerCase()
      .split(' ')
      .join('')}.com/`}
    target="_blank"
    sx={{ display: 'block', mb: [3, 4] }}
  >
    <Image src={img} alt={alt} sx={{ maxWidth: 256, maxHeight: 72 }} />
  </A>
)

export default props => (
  <>
    <Meta
      as={Head}
      title="Summer of Making"
      description="Join Hack Club’s Summer of Making: professional mentorship, $50k in GitHub hardware grants, & an unparalleled online community. Starting June 18, ages 13–18."
      image="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fsummer.jpg?v=1590594017411"
    />
    <Nav />
    <Header />
    <Box
      id="hardware"
      as="section"
      sx={{
        bg: '#000',
        pt: [4, 5],
        position: 'relative',
        minHeight: 620,
        height: ['75vh', '100vh'],
        display: 'block',
        overflow: 'hidden'
      }}
    >
      <Box
        as="video"
        muted
        autoPlay
        playsInline
        loop
        sx={{
          width: '100%',
          maxWidth: 'layout',
          maxHeight: '66vh',
          left: '50%',
          transform: 'translateX(-50%)',
          position: 'absolute',
          bottom: 0,
          zIndex: 0,
          paddingTop: '16px'
        }}
      >
        <source
          src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fcircuit.hevc.mp4?v=1590594547077"
          type="video/mp4; codecs=hevc"
        />
        <source
          src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fcircuit.webm?v=1590595137054"
          type="video/webm; codecs=vp9,opus"
        />
        <source
          src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fcircuit.mov?v=1590594547333"
          type="video/mov"
        />
        Video of blinking LED circuit board
      </Box>
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 500.532"
        version="1.1"
        sx={{
          left: '50%',
          bottom: '15%',
          width: [256, 384, 512],
          height: [128, 192, 256],
          transform: 'translateX(-50%)',
          position: 'absolute',
          zIndex: 1,
          '@media (prefers-reduced-motion: no-preference)': {
            animation: `${bounce} 1s linear`
          },
          transformOrigin: 'center bottom'
        }}
      >
        <g transform="translate(-45.883 -227.6)">
          <g transform="matrix(1.65161 0 0 1.65161 -29.898 -255.928)">
            <path
              fill="#fff"
              d="M40 0v20h120v20h20v20h20v20h20v20h120V80h20V60h20V40h40v20h20v20h140V60h20V40h20V0H40zm0 20H0v20h40V20z"
              transform="translate(45.883 292.76)"
            />
            <path
              fill="#000"
              d="M200 20v20h20V20h-20zm20 20v20h20V40h-20zm20 0h20V20h-20v20zm20 0v20h20V40h-20zm20 20v20h20V60h-20zm-20 0h-20v20h20V60z"
              transform="translate(45.883 292.76)"
            />
            <path
              fill="#000"
              d="M485.883 312.76h20v20h20v-20h20v20h20v20h-20v-20h-20v20h-20v-20h-20v-20z"
            />
          </g>
        </g>
      </Box>
      <Container
        sx={{
          maxWidth: [null, 720],
          textAlign: 'center',
          color: 'smoke',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Heading
          as="h2"
          variant="title"
          sx={{ color: 'white', maxWidth: 'narrow', mx: 'auto', mb: 3 }}
        >
          Free hardware from&nbsp;GitHub.
        </Heading>
        <Text as="p" variant="subtitle">
          GitHub is sponsoring $50k worth of hardware grants for student makers,
          alongside support from Adafruit & Arduino for gear.
        </Text>
      </Container>
      <Box
        as="aside"
        sx={{
          display: ['none', null, 'flex'],
          flexDirection: 'column',
          position: 'absolute',
          bottom: 0,
          left: 0,
          p: [null, null, 3, 4]
        }}
      >
        <Stat value="50k" unit="$" label="In grants" color="white" />
        <Stat value={100} unit="$" label="Per project" color="white" />
        <Stat value="∞" label="Possibilities" color="white" />
      </Box>
    </Box>
    <Box
      as="section"
      sx={{
        backgroundImage: 'url(/register-bg.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        '@media (hover: hover)': { backgroundAttachment: 'fixed' },
        py: 5
      }}
    >
      <Grid
        columns={[null, '1fr 2fr']}
        gap={3}
        variant="layout.container"
        sx={{ maxWidth: [null, 980], gridColumnGap: [null, 4] }}
      >
        <Heading as="h2" variant="title" color="white">
          Calling beginners and pros.
        </Heading>
        <Text as="p" variant="subtitle" color="smoke" mt={0}>
          If building physical things sounds exciting, we highly encourage you
          to dream something up. We want hardware hackers of any experience and
          no experience—whether it’ll be your first time soldering or your
          thousandth. Any 1) Plausible, 2) Cost-Effective, and 3) Inspired idea
          is eligible.
        </Text>
        <div />
        <div>
          <Button
            as="a"
            variant="cta"
            href="https://hack.af/hwp-apply/"
            target="_blank"
            sx={{
              bg: 'pink',
              backgroundImage: t => t.util.gradient('pink', 'orange')
            }}
          >
            Apply now
          </Button>
        </div>
      </Grid>
    </Box>
    {/*
    <Box
      id="mentorship"
      as="section"
      sx={{
        bg: 'snow',
        backgroundImage: [
          'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.125)), url(https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fmentorship-sm.jpg?v=1590592021018)',
          'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.25) 66%, rgba(0,0,0,0) 100%), url(https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2Fmentorship.jpg?v=1590473261619)'
        ],
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <Container
        as="article"
        sx={{
          'h2,h3,p': { maxWidth: 'copy', textShadow: 'text' },
          pt: [4, 5],
          pb: [5, 6, 7],
          color: 'white'
        }}
      >
        <Text as="p" variant="eyebrow" color="yellow">
          Mentorship program
        </Text>
        <Heading as="h2" variant="title">
          1-on-1 coaching with a professional.
        </Heading>
        <Text as="p" variant="subtitle" my={3}>
          Our mentors are engineers from our partners as well as
          invited industry professionals.
        </Text>
        <Text as="p" variant="subtitle" my={3}>
          Throughout the summer, you’ll be able to hop on Zoom calls with our mentors.
	  They’ll provide career advice, talk with you about your projects and discuss whatever you’d like.
        </Text>
        <Button as="a" variant="cta" href={APPLY_URL} mt={3} mb={[null, 4, 5]}>
          Pre-register
        </Button>
      </Container>
    </Box>
    */}
    <Box
      id="slack"
      as="section"
      sx={{
        bg: 'snow',
        backgroundImage: [
          'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.125)), url(https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2F2020-05-16_screenshot.jpeg?v=1589633885855)',
          'linear-gradient(to bottom, rgba(0,0,0,0.625), rgba(0,0,0,0.5) 66%, rgba(0,0,0,0) 100%), url(https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2F2020-05-16_screenshot.jpeg?v=1589633885855)'
        ],
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <Container
        as="article"
        sx={{
          'h2,h3,p': { maxWidth: 'copy', textShadow: 'text' },
          pt: [4, 5],
          pb: [5, 6, 7],
          color: 'white'
        }}
      >
        <Text as="p" variant="eyebrow" color="cyan">
          Community Slack
        </Text>
        <Heading as="h2" variant="title">
          Friends, mentors, & fun on the Slack.
        </Heading>
        <Text as="p" variant="subtitle" my={3}>
          We’re trying to make the Hack Club Slack the best place on the
          internet to be a teenager into technology.
        </Text>
        <Text as="p" variant="subtitle" my={3}>
          You’ll be entering an incredibly welcoming community of teenager
          makers. All summer, we’re running weekly live events, including AMAs,
          coding workshops, show & tells, office hours, and more.
        </Text>
        <Button
          as="a"
          variant="cta"
          href="https://hackclub.com/slack/"
          target="_blank"
          mt={3}
          mb={[null, 4, 5]}
          sx={{ bg: 'cyan' }}
        >
          Join the Slack
        </Button>
      </Container>
    </Box>
    <Box as="section" sx={{ bg: 'purple', backgroundImage: t => t.util.gradient('blue', 'purple'), color: 'white', py: [4, 5] }}>
      <Container>
        <Heading as="h2" variant="title">
          Let’s review.
        </Heading>
        <Grid columns={[null, 3]} gap={4} sx={{ mt: 3, a: { mt: 3 } }}>
          <div>
            <Heading as="h3" variant="headline">
              A scrapbook you’re proud of.
            </Heading>
            <Text as="p" variant="subtitle">
              Share updates of your learning every day: Every day this summer, Hack Clubbers are learning & building projects, sharing short video & photo updates each day. See the in-progress projects and join.
            </Text>
          </div>
          <div>
            <Heading as="h3" variant="headline">
              $50k in hardware grants.
            </Heading>
            <Text as="p" variant="subtitle">
              Whether it’s your first hardware project or hundredth, you can apply for
              hardware grants, sponsored by GitHub, Adafruit, & Arduino.
            </Text>
          </div>
          <div>
            <Heading as="h3" variant="headline">
              A summer of new friends.
            </Heading>
            <Text as="p" variant="subtitle">
              In the{' '}
              <A href="https://hackclub.com/slack/" color="red">
                Hack Club Slack
              </A>
              , join weekly events, mini-hackathons, biweekly AMAs with the most
              interesting people in tech, and a friendly community of 10k high
              school hackers.
            </Text>
          </div>
        </Grid>
        <Heading
          as="h3"
          variant="eyebrow"
          id="about"
          sx={{ color: 'white', py: 4 }}
        >
          In collaboration with
        </Heading>
        <Grid columns={[null, 2, 4]} gap={3}>
          <Collab
            alt="Hack Club"
            img="https://assets.hackclub.com/flag-standalone.svg"
          />
          <Collab alt="GitHub" img="/sponsors/github.svg" />
          <Collab alt="Adafruit" img="/sponsors/adafruit.png" />
          <Collab alt="Arduino" img="/sponsors/arduino.svg" />
        </Grid>
      </Container>
    </Box>
    <Box
      as="footer"
      sx={{ bg: 'smoke', color: 'black', py: [4, 5], a: { color: 'orange' } }}
    >
      <Container>
        <Heading as="h3" variant="subheadline">
          A project by <A href="https://hackclub.com/">Hack Club</A> students
        </Heading>
        <Text as="p" variant="caption" mb={1}>
          Site by <A href="https://lachlanjc.com/">@lachlanjc</A>. Always{' '}
          <A href="https://github.com/hackclub/summer/">open source</A>. Graphic
          from <A href="https://github.com/fritzing/fritzing-parts">Fritzing</A>
          .
        </Text>
        <Text as="p" variant="caption">
          Following the{' '}
          <A href="https://hackclub.com/conduct/">Hack Club Code of Conduct</A>.
        </Text>
        <Text
          as="p"
          variant="caption"
          sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: '#C0CCDA' }}
        >
          © 2020 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)
        </Text>
      </Container>
    </Box>
  </>
)

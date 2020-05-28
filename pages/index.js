import {
  Box,
  Card,
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
import theme from '../lib/theme'
import Nav from '../components/nav'
import Icon from '../components/icon'
import Stat from '../components/stat'
import SlideUp from '../components/slide-up'
import FadeIn from '../components/fade-in'
import { timeSince } from '../lib/dates'

import SignupForm from '../components/signup-form'
import SamNote from '../components/sam-note.mdx'

const APPLY_URL = '#apply'

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
      description="Join Hack Club’s Summer of Making: 6 weeks of professional mentorship, $50k in GitHub hardware grants, & an unparalleled online community. Apply by June 5, ages 13–18."
      image="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fsummer.jpg?v=1590594017411"
    />
    <Nav />
    <Box
      as="header"
      sx={{
        bg: 'snow',
        py: 6,
        px: 3,
        minHeight: '100vh',
        backgroundImage: [
          'url(https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Flander-sm.jpg?v=1590592121598)',
          'url(https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2Flander.jpg?v=1590473262091)'
        ],
        backgroundSize: 'cover',
        backgroundPosition: ['center bottom', 'center'],
        '@media (hover: hover)': { backgroundAttachment: 'fixed' }
      }}
    >
      <SlideUp duration={750}>
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
            <strong>Hack Club Summer of Making</strong> brings 6 weeks of
            mentorship, $50k of hardware grants, weekly get-togethers, & nonstop
            making—culminating in an awards show.
          </Text>
          <Grid
            columns={[null, 'auto 1fr']}
            gap={3}
            sx={{ alignItems: 'center' }}
          >
            <Button as="a" variant="cta" href={APPLY_URL}>
              Pre-register
            </Button>
            <Text as="p" variant="caption" color="slate">
              Signups open <strong>June 18</strong>
              <br />
              <strong>Ages 13–18</strong>, for students anywhere worldwide
            </Text>
          </Grid>
        </Card>
      </SlideUp>
    </Box>
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
          animation: `${bounce} 1s linear`,
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
        <Stat value="3" label="Partners" color="white" />
        <Stat value="∞" label="Possibilities" color="white" />
      </Box>
    </Box>
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
          1-on-1 weekly coaching with a professional.
        </Heading>
        <Text as="p" variant="subtitle" my={3}>
          Mentors are engineers from GitHub, Adafruit, & Arduino, as well as
          invited industry professionals.
        </Text>
        <Text as="p" variant="subtitle" my={3}>
          Every week, you’ll hop on a Zoom call with your mentor. They’ll set
          goals, give advice, & connect you with resources.
        </Text>
        <Button as="a" variant="cta" href={APPLY_URL} mt={4} mb={[null, 4, 5]}>
          Pre-register
        </Button>
      </Container>
    </Box>
    <Box as="section" bg="white" color="black" py={[4, 5]}>
      <Grid
        gap={4}
        columns={[null, 2]}
        variant="layout.container"
        sx={{ h3: { mt: 0 } }}
      >
        <div>
          <Heading as="h3" variant="headline">
            Weekly community get-togethers
          </Heading>
          <Text variant="subtitle">
            In addition to your mentor, you’ll join a weekly call with fellow
            Summer Makers in your area (web dev, games, hardware, etc). You’ll
            show off what you’re making, get help, make friends, & stay
            motivated.
          </Text>
        </div>
        <div>
          <Heading as="h3" variant="headline">
            Built-in project marketing
          </Heading>
          <Text variant="subtitle">
            At the end of the summer, we’ll be working with our partners—Github,
            Adafruit & Arduino—to share your project with the wider hacker
            community. Expect live shows, blog posts & social media shares!
          </Text>
        </div>
        <Grid
          columns="32px 1fr"
          sx={{
            gridColumnGap: 3,
            gridRowGap: 1,
            fontSize: 2,
            lineHeight: 'caption',
            svg: { color: 'muted' }
          }}
        >
          <Heading as="h3" variant="headline" sx={{ gridColumn: 'span 2' }}>
            Expectations
          </Heading>
          <Icon glyph="member-add" size={32} />
          <Text as="p">You’ll be joining a group of 150-300 students.</Text>
          <Icon glyph="clock" size={32} />
          <Text as="p">
            You should plan to spend 10+ hours/week on your project.
          </Text>
          <Icon glyph="event-check" size={32} />
          <Text as="p">
            Don’t worry if a camp or school interferes with the dates, as long
            as you can still make your project.
          </Text>
        </Grid>
      </Grid>
    </Box>
    <Box
      id="slack"
      as="section"
      sx={{
        bg: 'snow',
        backgroundImage: [
          'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.125)), url(https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2F2020-05-16_screenshot.jpeg?v=1589633885855)',
          'linear-gradient(to bottom, rgba(0,0,0,0.625), rgba(0,0,0,0.375) 66%, rgba(0,0,0,0) 100%), url(https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2F2020-05-16_screenshot.jpeg?v=1589633885855)'
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
        <Text as="p" variant="eyebrow" color="green">
          Community Slack
        </Text>
        <Heading as="h2" variant="title">
          Unlimited digital fun on the Hack Club Slack.
        </Heading>
        <Text as="p" variant="subtitle" my={3}>
          We’re trying to make the Hack Club Slack the best place on the
          internet to be a teenager into technology.
        </Text>
        <Text as="p" variant="subtitle" my={3}>
          This summer we’ll be having themed weeks to get you making. We’ve also
          got bi-weekly AMAs with some of most influential people in tech,
          community-led events & an awards ceremony to conclude the summer.
        </Text>
        <Button
          as="a"
          variant="cta"
          href="https://hackclub.com/slack/"
          target="_blank"
          mt={4}
          mb={[null, 4, 5]}
          sx={{ backgroundImage: t => t.util.gradient('green', 'cyan') }}
        >
          Join the Slack
        </Button>
      </Container>
    </Box>
    <Box
      id="about"
      as="section"
      sx={{
        bg: 'green',
        backgroundImage: t => t.util.gradient('cyan', 'blue'),
        color: 'white',
        py: [4, 5]
      }}
    >
      <Grid
        variant="layout.container"
        columns={[null, null, '4fr 2fr']}
        gap={4}
      >
        <div>
          <Heading as="h2" variant="title" sx={{ maxWidth: 'narrow' }}>
            By a teenager, for&nbsp;teenagers.
          </Heading>
          <Grid
            columns="72px 1fr"
            sx={{
              maxWidth: 'copy',
              alignItems: ['center', 'start'],
              mt: 4,
              mb: 3
            }}
          >
            <Avatar
              src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fsam.jpg?v=1590595277523"
              alt="Sam Poder avatar"
              size={72}
            />
            <Box>
              <Heading as="h3" variant="headline" sx={{ my: 1 }}>
                Sam Poder
              </Heading>
              <Badge as="span" variant="default">
                Creator, he/him
              </Badge>
            </Box>
            <Flex
              sx={{
                justifyContent: 'center',
                gridRow: ['1', 'auto'],
                gridColumn: ['3', '1']
              }}
            >
              <IconButton
                as="a"
                href="mailto:summer@sampoder.com"
                sx={{
                  bg: 'transparent',
                  border: 0,
                  p: 0,
                  borderRadius: 'circle'
                }}
              >
                <Icon glyph="email" size={32} />
              </IconButton>
            </Flex>

            <Box
              sx={{
                fontSize: [2, 3],
                lineHeight: 'subheading',
                gridColumn: ['span 2', '2'],
                p: { mt: 0 }
              }}
            >
              <SamNote />
            </Box>
          </Grid>
          <Grid columns={[null, 2]} gap={[3, 4]} sx={{ maxWidth: 'copyPlus' }}>
            <Contributor
              name="Roshan Palakkal"
              avatar="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Froshan.jpg?v=1590595332922"
            />
            <Contributor
              name="Neel Redkar"
              avatar="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fneel.jpg?v=1590595277246"
            />
          </Grid>
        </div>
        <Box as="aside" sx={{ textAlign: 'center' }}>
          <Heading
            as="h3"
            variant="eyebrow"
            sx={{ maxWidth: 'narrow', color: 'white', mb: 4 }}
          >
            In collaboration with
          </Heading>
          <Collab
            alt="Hack Club"
            img="https://assets.hackclub.com/flag-standalone.svg"
          />
          <Collab alt="GitHub" img="/sponsors/github.svg" />
          <Collab alt="Adafruit" img="/sponsors/adafruit.png" />
          <Collab alt="Arduino" img="/sponsors/arduino.svg" />
        </Box>
      </Grid>
    </Box>
    <Box as="section" sx={{ bg: 'snow', color: 'black', py: [4, 5] }}>
      <Container>
        <Heading as="h2" variant="title" sx={{ color: 'orange' }}>
          Let’s review.
        </Heading>
      </Container>
      <Grid
        columns={[null, 3]}
        gap={4}
        variant="layout.container"
        sx={{ a: { mt: 3 } }}
      >
        <div>
          <Heading as="h3" variant="headline">
            6 weeks of exclusive project mentorship.
          </Heading>
          <Text as="p" variant="subtitle">
            You’ll submit an application with your project idea, be paired with
            an incredible industry professional, then spend 6 weeks building.
          </Text>
          <Text as="p" variant="subtitle">
            You’ll also get to join weekly get-togethers with like-minded peers
            & get free project promotion at the end of the summer.
          </Text>
        </div>
        <div>
          <Heading as="h3" variant="headline">
            $50k in hardware grants, for all.
          </Heading>
          <Text as="p" variant="subtitle">
            Whether or not you join the Mentorship Program, you can apply for
            hardware grants, sponsored by GitHub, Adafruit, & Arduino.
          </Text>
        </div>
        <div>
          <Heading as="h3" variant="headline">
            A summer of community fun, guaranteed.
          </Heading>
          <Text as="p" variant="subtitle">
            In the{' '}
            <A href="https://hackclub.com/slack/" color="red">
              Hack Club Slack
            </A>
            , join themed weeks, mini-hackathons, biweekly AMAs with the most
            interesting people in tech, and an end-of-summer awards show.
          </Text>
        </div>
      </Grid>
    </Box>
    <Box
      id="apply"
      as="header"
      sx={{
        bg: 'dark',
        py: [4, 5],
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        '@media (hover: hover)': { backgroundAttachment: 'fixed' }
      }}
    >
      <Container variant="narrow" sx={{ textAlign: 'center' }}>
        <Heading
          as="h1"
          variant="title"
          sx={{
            mt: 0,
            mb: 3,
            fontSize: [4, 6, 7],
            color: 'white',
            lineHeight: [0.875, 0.8],
            position: 'relative',
            zIndex: 1,
            textShadow: 'text'
          }}
        >
          Pre-register
        </Heading>
        <Heading
          as="h2"
          variant="subtitle"
          sx={{
            color: 'smoke',
            mb: [3, 4],
            strong: { color: 'snow' }
          }}
        >
          Signups open & the program starts in{' '}
          {timeSince('2020-06-18', true, true)} on{' '}
          <strong>June&nbsp;18th</strong>. We can’t wait to start hacking with
          you!
        </Heading>
        <SignupForm {...props} />
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
          <A href="https://github.com/hackclub/summer/">open source</A>. Photos
          from{' '}
          <A href="https://photos.app.goo.gl/F5JDxq5FzfhofTMD9">
            Flagship 2019
          </A>
          .
        </Text>
        <Text as="p" variant="caption">
          Program follows the{' '}
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

export const getStaticProps = async () => {
  const props = {}

  let options = {
    maxRecords: 1,
    sort: [{ field: 'Created at', direction: 'desc' }],
    filterByFormula: '{Approved for display} = 1'
  }
  let endpointURL = `https://api2.hackclub.com/v0.1/Pre-register/Applications?select=${JSON.stringify(
    options
  )}`

  try {
    let results = await fetch(endpointURL, { mode: 'cors' }).then(r => r.json())
    let reason = results[0].fields
    props.reason = reason['What do you want to learn?']
    props.time = reason['Created at']
    props.status = 'success'
  } catch (e) {
    props.status = 'error'
  }
  return { props, unstable_revalidate: 1 }
}

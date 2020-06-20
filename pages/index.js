import {
  Box,
  Card,
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
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import Stat from '../components/stat'

import Header from '../components/header'
import Posts from '../components/posts'
import Hardware from '../components/hardware'
import Slack from '../components/slack'

const Collab = ({ img, alt }) => (
  <A
    href={`https://${alt.toLowerCase()}.com/`}
    target="_blank"
    sx={{ display: 'block', mb: [3, 4] }}
  >
    <Image src={img} alt={alt} sx={{ maxWidth: 256, maxHeight: 72 }} />
  </A>
)

export default ({ scraps, images }) => (
  <>
    <Meta
      as={Head}
      title="Summer of Making"
      description="$50k in GitHub hardware grants, daily streak system, Slack community with 10k hackers, & weekly online events. Open to teenagers worldwide. What will you make?"
      image="https://assets.hackclub.com/log/2020-06-18_summer.jpg"
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
      <Hardware />
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
        gap={[null, 2]}
        variant="layout.container"
        sx={{ maxWidth: [null, 980], gridColumnGap: [null, 4] }}
      >
        <Text as="p" variant="eyebrow">
          Hardware grants
        </Text>
        <div />
        <Heading as="h2" variant="title" color="white" mb={[3, 0]}>
          Make it physical.
        </Heading>
        <Text as="p" variant="subtitle" color="smoke" my={0}>
          We want hardware hackers of any experience and no experience—whether
          it’ll be your first time soldering or your thousandth. Any
          1)&nbsp;Plausible, 2)&nbsp;Cost-Effective, and 3)&nbsp;Inspired idea
          is eligible.
        </Text>
        <div />
        <div>
          <Button
            as="a"
            variant="cta"
            href="https://hack.af/hwp-apply"
            target="_blank"
            sx={{
              mt: [4, 0],
              bg: 'green',
              backgroundImage: t => t.util.gradient('cyan', 'green'),
              color: 'darkless'
            }}
          >
            Apply for hardware
          </Button>
        </div>
      </Grid>
    </Box>
    <Box id="scrapbook" as="section" sx={{ bg: 'snow', py: [4, 5] }}>
      <Grid
        columns={[2, 3, 5]}
        variant="layout.wide"
        gap={[3, 4]}
        sx={{ px: [3, 4, 5] }}
      >
        <Box sx={{ gridColumn: 'span 2' }}>
          <Text
            as="a"
            href="https://scrapbook.hackclub.com/"
            variant="eyebrow"
            color="orange"
            sx={{ fontSize: [3, 4], textDecoration: 'none' }}
          >
            scrapbook.hackclub.com
          </Text>
          <Heading as="h2" variant="title">
            Share your daily progress.
          </Heading>
          <Text as="p" variant="subtitle" my={3}>
            As you learn & make projects, share short photo/video updates each
            day & build a streak. You can even put custom CSS all over your
            profile & use your domain.
          </Text>
          <Button
            as="a"
            variant="cta"
            href="https://scrapbook.hackclub.com/"
            sx={{ backgroundImage: t => t.util.gradient('pink', 'orange') }}
          >
            See what everyone’s making
          </Button>
        </Box>
        {images.map(url => (
          <Card
            key={url}
            style={{ backgroundImage: `url(${url})` }}
            variant="interactive"
            sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: [256, 360],
              ':last-of-type': { display: ['none', null, 'block'] }
            }}
          />
        ))}
      </Grid>
    </Box>
    <Posts data={scraps} />
    <Slack />
    <Box
      as="section"
      sx={{
        bg: 'purple',
        backgroundImage: t => [
          t.util.gradient('blue', 'purple'),
          `radial-gradient(ellipse farthest-corner at bottom center, ${
            t.colors.pink
          } 5%, ${t.colors.orange}, ${t.colors.orange})`
        ],
        color: 'white',
        py: [4, 5]
      }}
    >
      <Container>
        <Heading as="h2" variant="title">
          Let’s review.
        </Heading>
        <Grid
          columns={[null, 3]}
          gap={[3, 4]}
          sx={{ mt: 3, 'p + a': { mt: 3, color: 'pink', bg: 'white' } }}
        >
          <div>
            <Heading as="h3" variant="headline">
              $50k in hardware grants.
            </Heading>
            <Text as="p" variant="subtitle">
              Whether it’s your first hardware project or hundredth, you can
              have GitHub buy you electronics for a hardware project.
            </Text>
            <Button as="a" variant="cta" href="https://hack.af/hwp-apply">
              Apply for hardware
            </Button>
          </div>
          <div>
            <Heading as="h3" variant="headline">
              Show up with daily updates.
            </Heading>
            <Text as="p" variant="subtitle">
              Share daily updates of your learning in a beautiful portfolio with
              your own CSS—and build up a streak.
            </Text>
            <Button as="a" variant="cta" href="https://scrapbook.hackclub.com/">
              Join now
            </Button>
          </div>
          <div>
            <Heading as="h3" variant="headline">
              Zoom events with friends.
            </Heading>
            <Text as="p" variant="subtitle">
              Join weekly live events, including coding workshops, show & tells,
              office hours, biweekly AMAs, and more.
            </Text>
            <Button as="a" variant="cta" href="https://hackclub.com/slack/">
              Apply for Slack
            </Button>
          </div>
        </Grid>
        <Heading
          as="h3"
          variant="eyebrow"
          id="about"
          sx={{ color: 'white', mt: 5, mb: 3 }}
        >
          In collaboration with
        </Heading>
        <Grid columns={[null, 2, 4]} gap={3}>
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
        <Heading as="h3" variant="subheadline" mb={2}>
          A project by <A href="https://hackclub.com/">Hack Club</A>.
        </Heading>
        <Text as="p" variant="caption" mb={3}>
          Thank you: Sam Poder for the idea + Lachlan Campbell, Zach Latta,
          Roshan Palakkal, Neel Redkar, Matthew Stanciu, Chris Walker, Max Wofford.
        </Text>
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

export const getStaticProps = async () => {
  let images = []
  let scraps = []
  try {
    const { take, takeRight, takeLeft, filter, shuffle, orderBy, map } = require('lodash')
    let posts = await fetch('https://scrapbook.hackclub.com/api/posts')
      .then(r => r.json())
      .then(posts => orderBy(posts, 'postedAt', 'desc'))
      .then(posts =>
        filter(posts, p =>
          ['image/jpg', 'image/jpeg', 'image/png'].includes(
            p.attachments?.[0].type
          )
        )
      )
    scraps = take(posts, 8)
    posts = shuffle(takeRight(takeLeft(posts, 11), 3))
    images = map(posts, 'attachments[0].thumbnails.large.url')
  } catch (err) {}
  return { props: { scraps, images }, unstable_revalidate: 2 }
}

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
import Icon from '../components/icon'
import Stat from '../components/stat'

import Header from '../components/header'
import Hardware from '../components/hardware'
import Slack from '../components/slack'

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
    href={`https://${alt.toLowerCase()}.com/`}
    target="_blank"
    sx={{ display: 'block', mb: [3, 4] }}
  >
    <Image src={img} alt={alt} sx={{ maxWidth: 256, maxHeight: 72 }} />
  </A>
)

export default ({ scraps }) => (
  <>
    <Meta
      as={Head}
      title="Summer of Making"
      description="Join Hack Club’s Summer of Making: $50k in GitHub hardware grants, a place to post daily updates, & weekly online events & community. Starting June 18, ages 13–18."
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
        gap={3}
        variant="layout.container"
        sx={{ maxWidth: [null, 980], gridColumnGap: [null, 4] }}
      >
        <div>
          <Text as="p" variant="eyebrow">
            Hardware grants
          </Text>
          <Heading as="h2" variant="title" color="white">
            Make it physical.
          </Heading>
        </div>
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
              bg: 'green',
              backgroundImage: t => t.util.gradient('cyan', 'green'),
              color: 'darkless'
            }}
          >
            Apply now
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
            sx={{ textDecoration: 'none' }}
          >
            scrapbook.hackclub.com
          </Text>
          <Heading as="h2" variant="title">
            Share your daily progress.
          </Heading>
          <Text as="p" variant="subtitle" my={3}>
            Every day this summer, as you learn & build projects, share short
            video & photo updates each day. You can put custom CSS all over your
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
        {scraps.map(url => (
          <Card
            key={url}
            style={{ backgroundImage: `url(${url})` }}
            sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: [256, 360],
              ':nth-of-type(6)': { gridColumn: [null, 'span 2'] },
              ':last-of-type': { display: ['none', null, 'block'] }
            }}
          />
        ))}
      </Grid>
    </Box>
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
              Apply now
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
            <Button as="a" variant="cta" href="https://hack.af/scrapbook">
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
            <Button as="a" variant="cta" href="https://hackclub.com/slack">
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
        <Heading as="h3" variant="subheadline">
          A project by <A href="https://hackclub.com/">Hack Club</A>.
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

export const getStaticProps = async () => {
  let scraps = []
  try {
    const { takeRight, filter, shuffle, orderBy, map } = require('lodash')
    let posts = await fetch('https://scrapbook.hackclub.com/api/posts').then(
      r => r.json()
    )
    posts = shuffle(
      takeRight(
        filter(orderBy(posts, 'postedAt'), p =>
          p.attachments?.[0].type.startsWith('image')
        ),
        7
      )
    )
    scraps = map(posts, 'attachments[0].thumbnails.large.url')
  } catch (err) {}
  return { props: { scraps }, unstable_revalidate: 10 }
}

import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Image,
  Text,
  Textarea
} from 'theme-ui'
import Banner from '../components/banner'
import Scrapbook from '../components/scrapbook'
import HardwareGrants from '../components/hardwaregrants'
import ShoulderBot from '../components/shoulderbot'
import KawasakiDetector from '../components/kawasakiDetector'
import LedMusic from '../components/ledMusic'
import Arts from '../components/arts'
import AMA from '../components/AMA'
import Connect from '../components/connect'
import CommunityEvents from '../components/communityevents'
import Map from '../components/map'
import Thanks from '../components/thankyou'

export default () => (
  <Box>
    <Banner />
    <Container
      variant="copy"
      sx={{
        my: 3,
        py: 3,
        border: '2px dashed',
        borderColor: 'sunken',
        borderRadius: 'default',
        mt: [3, 4],
        mb: [3, 4]
      }}
    >
      <Text
        sx={{
          fontSize: '24px'
        }}
      >
        In 1967, 100,000 people gathered in San Francisco for the Summer of
        Love. In 2020, we at Hack Club hosted the Summer of Making. It wasn't an
        event or a program. It’s was a theme for the summer and a challenge for
        students to take on. It was also a summer like no other, with hackers
        around the world stuck at home. To support makers, we distributed
        $50,000 in free electronics (thanks GitHub!) & built Snapchat streaks
        for coding—but really Summer of Making was about the makers. We left it
        them to get hacking & they built some pretty awesome things...
      </Text>
    </Container>
    <Map />
    <Container
      variant="copy"
      sx={{
        my: 3,
        py: 3,
        border: '2px dashed',
        borderColor: 'sunken',
        borderRadius: 'default',
        mt: [3, 4],
        mb: [3, 4]
      }}
    >
      <Text
        sx={{
          fontSize: '24px'
        }}
      >
        We focus a lot on software at Hack Club. It's soft, after all.
        Comfortable. This summer we left our comfort zone. Global
        pandemic—generally a bad start to summer—left us with $50k of unused
        grant money from GitHub. We thought about saving it. Instead we gave it
        away to students as a kind of fun experiment. One thing we liked about
        hardware grants was that bits—however magical—are ultimately constrained
        by atoms. It seemed right to connect over building physical things
        during a summer when personal connections relied on the internet more
        than ever.
      </Text>
    </Container>
    <HardwareGrants />
    <ShoulderBot />
    <KawasakiDetector />
    <LedMusic />
    <KawasakiDetector />
    <Container
      variant="copy"
      sx={{
        my: 3,
        py: 3,
        border: '2px dashed',
        borderColor: 'sunken',
        borderRadius: 'default',
        mt: [3, 4],
        mb: [3, 4]
      }}
    >
      <Text
        sx={{
          fontSize: '24px'
        }}
      >
        As part of Summer of Making we built Scrapbook. The idea is to share
        updates of what you’re working on every day: every day this summer, Hack
        Clubbers are learning & building projects, sharing short video or photo
        updates via a Slack channel. Through a Slack bot, an Airtable, & a
        Next.js website that makes everything browsable. The response was
        amazing and the site is full of amazing things build this summer.
      </Text>
    </Container>
    <Scrapbook />
    <AMA />
    <Arts />
    <Connect />
    <Thanks />
    <Box as="footer" sx={{ py: [4, 5], a: { color: 'orange' } }}>
      <Container>
        <Heading as="h3" variant="subheadline" mb={2}>
          A project by <a href="https://hackclub.com/">Hack Club</a>.
        </Heading>
        <Text as="p" variant="caption" mb={3}>
          Thank you: Sam Poder, Lachlan Campbell, Zach Latta, Roshan Palakkal,
          Neel Redkar, Matthew Stanciu, Chris Walker, Max Wofford.
        </Text>
        <Text as="p" variant="caption" mb={1}>
          Site by <a href="https://lachlanjc.com/">@lachlanjc</a>. Always{' '}
          <a href="https://github.com/hackclub/summer/">open source</a>.
          Graphics from{' '}
          <a href="https://github.com/fritzing/fritzing-parts">Fritzing</a>.
        </Text>
        <Text as="p" variant="caption">
          Following the{' '}
          <a href="https://hackclub.com/conduct/">Hack Club Code of Conduct</a>.
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
  </Box>
)

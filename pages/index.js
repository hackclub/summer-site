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
        This will be changed :) 53 years ago, 100,000 people gathered in San
        Francisco for the Summer of Love. Welcome to the Summer of Making. It’s
        not an event or program. It’s a theme for the summer, a challenge to
        every teenager reading this: What will you make? To suppport you, we’re
        distributing $50,000 in free electronics (thanks GitHub!) & building
        Snapchat streaks for coding—but really Summer of Making is about you. If
        this will be the best summer ever, it’ll be because of what you choose
        to hack on & learn from.
      </Text>
    </Container>
    <Scrapbook />
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
        grant money from GitHub. We thought about saving it. Instead we
        gave it away to students as a kind of fun experiment. One thing we liked about
        hardware grants was that bits—however magical—are ultimately constrained
        by atoms. It seemed right to connect over building physical things during
        a summer when personal connections relied on the internet more than ever.
      </Text>
    </Container>
    <HardwareGrants />
    <ShoulderBot />
    <KawasakiDetector />
    <LedMusic />
    <Arts />
    <AMA />
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

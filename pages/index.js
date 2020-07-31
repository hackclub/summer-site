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
      <Heading
        sx={{
          position: 'relative',
          textAlign: 'center'
        }}
      >
        Some Scrappy Facts
      </Heading>
      <br />
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
  </Box>
)

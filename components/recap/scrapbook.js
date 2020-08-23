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
import Mention from '../mention'
import ImageCard from './imagecard'

export default () => (
  <Box
    as="header"
    sx={{
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      height: '75%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundColor: '#5bc0de',
      clear: 'both'
    }}
  >
    <Container>
      <Container
        sx={{
          textAlign: ['left', 'center', 'center'],
          p:[0]
        }}
      >
        <Heading
          as="h1"
          sx={{
            mt: [3, 4],
            mb: [3],
            fontSize: 4
          }}
        >
          Hack Clubbers shared
        </Heading>
        <Heading
          as="h1"
          sx={{
            fontSize: [6,7,7]
          }}
        >
          3500 creations
        </Heading>
        <Button
          as="a"
          href="https://scrapbook.hackclub.com/"
          sx={{ color: 'white', mt: [3] }}
        >
          Explore Scrapbook →
        </Button>
      </Container>
      <Grid columns={[null, 2, 3]} gap={3} mt={[3, 4]} mb={[3, 4]}>
        <ImageCard
          content="Made by"
          mention="austin"
          url="https://dl.airtable.com/.attachmentThumbnails/169f54f04aa5f292dc8fd2dbc99493ee/a7a1ce23"
        />
        <ImageCard
          content="Taken by"
          mention="rishi"
          url="https://dl.airtable.com/.attachmentThumbnails/eaf99a91323fd7d2cd06fea92f5fee16/60cacb4b"
        />
        <ImageCard
          content="Made by"
          mention="lskaling"
          url="https://dl.airtable.com/.attachmentThumbnails/22cf4e8d252cdfd8000d9c36690f714d/35ebbc64"
        />
        
      </Grid>
      <Grid
        columns={[2, 3, 6]}
        gap={1.5}
        sx={{ textAlign: 'center;' }}
        mt={[3, 4]}
        mb={[3, 4]}
      >
        <Text>
          <Heading as="h1" sx={{ fontSize: 6 }}>
            360
          </Heading>
          Makers
        </Text>
        <Text>
          <Heading as="h1" sx={{ fontSize: 6 }}>
            972
          </Heading>
          Git Commits
        </Text>
        <Text>
          <Heading as="h1" sx={{ fontSize: 6 }}>
            1AM
          </Heading>
          Most Common Post Time
        </Text>
        <Text>
          <Heading as="h1" sx={{ fontSize: 6 }}>
            45
          </Heading>
          Highest Streak
        </Text>
        <Text>
          <Heading as="h1" sx={{ fontSize: 6 }}>
            104
          </Heading>
          Most Individual Scraps
        </Text>
        <Text>
          <Heading as="h1" sx={{ fontSize: 6 }}>
            34
          </Heading>
          Different Timezones
        </Text>
      </Grid>
    </Container>
  </Box>
)

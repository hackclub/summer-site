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
import ColorSwitcher from './color-switcher'
import Mention from './mention'

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
      backgroundColor: '#33d6a6',
      clear: 'both'
    }}
  >
    <Heading
      as="h1"
      sx={{
        mt: [3, 4],
        mb: [3, 4],
        textAlign: 'center',
        fontSize: 9
      }}
    >
      3,500
    </Heading>
    <Heading
      as="h1"
      sx={{
        mt: [3, 4],
        mb: [3, 4],
        textAlign: 'center',
        fontSize: 4
      }}
    >
      Scrapbook Entries Shared
    </Heading>
    <Container>
      <Grid
        columns={[null, 2, 3]}
        gap={3}
        mt={[3, 4]}
        mb={[3, 4]}
      >
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px'
          }}
          p={[0]}
          variant="interactive"
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://dl.airtable.com/.attachmentThumbnails/169f54f04aa5f292dc8fd2dbc99493ee/a7a1ce23')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '400px',
              width: '100%',
              backgroundPosition: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}
            p={[3, 4]}
          ></Card>
          <Text
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
            p={[1, 2]}
          >
            Made by <Mention username="austin" key="austini" />
          </Text>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px'
          }}
          p={[0]}
          variant="interactive"
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://dl.airtable.com/.attachmentThumbnails/169f54f04aa5f292dc8fd2dbc99493ee/a7a1ce23')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '400px',
              width: '100%',
              backgroundPosition: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}
            p={[3, 4]}
          ></Card>
          <Text
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
            p={[1, 2]}
          >
            Made by <Mention username="austin" key="austini" />
          </Text>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px'
          }}
          p={[0]}
          variant="interactive"
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://dl.airtable.com/.attachmentThumbnails/169f54f04aa5f292dc8fd2dbc99493ee/a7a1ce23')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '400px',
              width: '100%',
              backgroundPosition: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}
            p={[3, 4]}
          ></Card>
          <Text
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
            p={[1, 2]}
          >
            Made by <Mention username="austin" key="austini" />
          </Text>
        </Card>
      </Grid>
      <Grid
        columns={[2, 3, 6]}
        gap={1.5}
        sx={{ textAlign: 'center;' }}
        mt={[3, 4]}
        mb={[3, 4]}
      >
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>360</Heading>
          Makers
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>972</Heading>
          Git Commits
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>1AM</Heading>
          Most Common Post Time
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>45</Heading>
          Highest Streak
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>104</Heading>
          Most Individual Scraps
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>34</Heading>
          Different Timezones
        </Text>
        
      </Grid>
    </Container>
  </Box>
)

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    }
  }
}

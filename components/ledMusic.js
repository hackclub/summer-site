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
      position: 'relative',
      overflow: 'hidden',
      height: '75%',
      clear: 'both'
    }}
  >
    <Container>
      <Grid columns={[null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
        <Card
          sx={{
            backgroundSize: 'cover',
            textAlign: 'left',
            clear: 'both',
            background: 'none',
            backgroundPosition: 'center'
          }}
          p={[0]}
        >
          <Heading>Using hardware to</Heading>
          <Heading as="h1" sx={{ fontSize: 7 }}>
            have fun
          </Heading>
          <Text sx={{ fontSize: 2 }}>
            <br />
            Everyone loves LEDs, and they were super popular this summer!
            Patrick & Addison from Illinois worked on a Smart Album Cover
            Display, that detects the currently playing song through a
            microphone and shows the album art.
          </Text>
          <br />
          <Button>Watch a video</Button>
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
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://pbs.twimg.com/media/EeCmpifXoAEN3vo?format=jpg&name=large')",
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
            fake filler image ignore
          </Text>
        </Card>
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

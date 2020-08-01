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
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      clear: 'both'
    }}
  >
    <Heading
      as="h1"
      sx={{
        mt: [3, 4],
        mb: [3, 4],
        textAlign: 'center',
        fontSize: 4
      }}
    >
      The community came together and hosted
    </Heading>
    <Heading
      as="h1"
      sx={{
        mt: [3, 4],
        mb: [3, 4],
        textAlign: 'center',
        fontSize: 7
      }}
    >
      exciting events
    </Heading>
    <Heading
      as="h1"
      sx={{
        mt: [3, 4],
        mb: [3, 4],
        textAlign: 'center',
        fontSize: 3
      }}
    >
      for other Hack Clubbers to enjoy.
    </Heading>
    <Container>
      <Grid columns={[null, 2]} gap={3} mt={[3, 4]} mb={[3, 4]}>
        <Card
          sx={{
            backgroundSize: 'cover',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px'
          }}
          p={[0]}
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://dl.airtable.com/.attachmentThumbnails/670a398719dda21dacdee50048057240/31a0d78b')",
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
          <Container
            sx={{
              position: 'relative',
              textAlign: 'center',
              color: 'white'
            }}
            p={[2, 4]}
          >
            <Mention username="bri4nong" key="bri4nongi" />
            's Paste project, a pastebin clone that was built for the Open
            Source Fiesta. OSF was an event that promoted open source values and
            helped people get started with programming.
          </Container>
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
                "url('https://pbs.twimg.com/profile_images/1160713388940496896/fWNLI3aU_400x400.jpg')",
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
          <Container
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
            p={[2, 4]}
          >
            Sam Curry speaking at the Hack Club CTF. The event was fun and
            competitive, as well as a great opportunity for the community to
            gain a better understanding of securing web apps by observing and
            exploiting vulnerabilities in an existing web application.
          </Container>
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

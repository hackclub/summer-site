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
      backgroundColor: '#a633d6',
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
      We shipped hardware to
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
      Twenty Eight
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
      different countries and every inhabited continent.
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
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://dl.airtable.com/.attachmentThumbnails/734b97f53ea8e220d8cdae14889d07a0/eb1ec9d7')",
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
            <Mention username="nikhiljose" key="nikhiljosei" />'s package
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
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://dl.airtable.com/.attachmentThumbnails/f7b5c52f36d4b8ae87a453e6ca9ba66d/e5c86c96')",
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
            <Mention username="dinaelhanan" key="dinaelhanani" />'s package
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
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://dl.airtable.com/.attachmentThumbnails/71051472c4c75d3be2db6fc4324fc3ca/36873df8')",
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
            <Mention username="blucashbaugh" key="blucashbaughi" />'s package
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
          <Heading as="h1" sx={{fontSize: 6}}>201</Heading>
          Makers Supported
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>51</Heading>
          Arduino Projects
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>16</Heading>
          Average Maker Age
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>1595</Heading>
          Shopping Carts Made
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>56</Heading>
          Retailers Used
        </Text>
        <Text>
          <Heading as="h1" sx={{fontSize: 6}}>85</Heading>
          Different Cities
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
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
import ColorSwitcher from '../components/color-switcher'

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
    <ColorSwitcher
      sx={{
        color: 'white',
        position: 'absolute',
        top: [2, 3],
        right: [3, 4]
      }}
    />
    <Image
      src="https://i.imgur.com/AJZKVSF.png"
      sx={{
        
        mt: [3, 4],
        mb: [3, 4],
        objectFit: 'cover',
        minHeight: '200px',
        maxHeight: '400px'
      }}
    />
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
      posts,
    },
  }
}
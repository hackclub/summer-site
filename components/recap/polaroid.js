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
import Video from './video'
import Mention from '../mention'

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
      <Grid columns={[null, null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
        <Box sx={{
            width: ['80%', '100%', 'none'],
            borderRadius: '10px',
            display: [null, null, 'none']
          }}>
        <Video
          mux="uzmqHFNDz7tghgSSLUpMjOC9tMgQED024qzVyTK2oKhs"
          style={{width: '100%', borderRadius: '10px'}}
        /></Box>
        <Card
          sx={{
            backgroundSize: 'cover',
            clear: 'both',
            background: 'none',
            backgroundPosition: 'center',
            textAlign: ['left', 'center', 'left']
          }}
          p={[0]}
        >
          <Heading>Using hardware to store</Heading>
          <Heading as="h1" sx={{ fontSize: [6, 7, 7] }}>
            memories
          </Heading>
          <Text
            sx={{
              fontSize: [2, 2, 3],
              width: ['100%', '100%', '85%'],
              mt: [2]
            }}
          >
            Sulthan Nizarudin, a 18-year-old from Kerala (India), used his
            hardware to create a polaroid-style camera to take fun photos with
            friends! The project uses a Raspberry Pi, a camera module, thermal
            printer and more!
          </Text>
          <br />
        </Card>
        <Box sx={{
            width: '100%',
            borderRadius: '10px',
            display: ['none', 'none', 'block']
          }}>
        <Video
          mux="uzmqHFNDz7tghgSSLUpMjOC9tMgQED024qzVyTK2oKhs"
          style={{width: '100%', borderRadius: '10px'}}
        /></Box>
      </Grid>
    </Container>
  </Box>
)

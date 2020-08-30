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
          mux="51pEN301006xaiYL8m00IFulJpgzVRisfEh1cKIgfd15Ro"
          style={{width: '100%', borderRadius: '10px'}}
        /></Box>
        <Card
          sx={{
            backgroundSize: 'cover',
            textAlign: ['left', 'center', 'left'],
            clear: 'both',
            background: 'none',
            backgroundPosition: 'center'
          }}
          p={[0]}
          className="ledborder"
        >
          <Heading>Using hardware to</Heading>
          <Heading as="h1" sx={{ fontSize: [6, 7, 7] }}>
            have <span className="ledHoverEffect">fun</span>
          </Heading>
          <Text sx={{ fontSize: [2,2,3], width: ['100%','100%','85%'], mt:[2] }}>
            Everyone loves LEDs, and they were super popular this summer!
            Patrick & Addison from Illinois worked on a Smart Album Cover
            Display, that detects the currently playing song through a
            microphone and shows the album art.
          </Text>
          <br />
        </Card>
        <Box sx={{
            width: '100%',
            borderRadius: '10px',
            display: ['none', 'none', 'block']
          }}>
        <Video
          mux="51pEN301006xaiYL8m00IFulJpgzVRisfEh1cKIgfd15Ro"
          style={{width: '100%', borderRadius: '10px'}}
        /></Box>
      </Grid>
    </Container>
  </Box>
)

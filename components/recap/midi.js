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
      background: '#33d6a6',
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%231bb880' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      clear: 'both'
    }}
  >
    <Container>
      <Grid columns={[null, null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
        <Video style={{width: "100%", borderRadius: '10px'}} mux="v4hGsiJSJCZ011cdjpaMde2qU3kerXBS9WQf95pzaFOE"/>
        <Card
          sx={{
            backgroundSize: 'cover',
            textAlign: 'right',
            color: 'white',
            clear: 'both',
            textAlign: ['left', 'center', 'right'],
            background: 'none',
            backgroundPosition: 'center'
          }}
          p={[0]}
        >
          <Heading>Using hardware to make</Heading>
          <Heading as="h1" sx={{ fontSize: [6, 7, 7] }}>
            fire beats
          </Heading>
          <Text
            sx={{
              fontSize: [2, 2, 3],
              paddingLeft: ['0%', '0%', '15%'],
              right: 0,
              mt: [2]
            }}
          >
            Onur Sertgil, a 17 year old from Turkey, had always wanted to get
            started with digital music production. Using his hardware grant he
            built a fully custom MIDI controller that's capable of making some
            epic beats!
          </Text>
          
        </Card>
      </Grid>
    </Container>
  </Box>
)

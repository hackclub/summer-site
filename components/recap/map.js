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

export default () => (
  <Box
    as="header"
    sx={{
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundColor: '#338eda',
      clear: 'both',
      objectFit: 'cover',
      minHeight: '500px',
      maxHeight: '850px',
      backgroundPosition: 'center center',
      backgroundImage: 'radial-gradient(at left top,rgba(247,255,0,0.66),rgb(0,255,255,0.66)),url(http://cloud-dpbz2xfgh.vercel.app/kzojkec.png)'
    }}
  >
    <Container sx={{
      height: '100%',
    }}>
    <Heading className="map-center-text">
      Makers from all over the world  joined in!
    </Heading>
    </Container>
  </Box>
)


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
      backdropFilter: 'blur(20px)',
      backgroundPosition: 'center center',
      backgroundImage: 'radial-gradient(at left top,rgba(247,255,0,0.66),rgb(0,255,255,0.66)),url(https://i.imgur.com/KzojkeC.png)'
    }}
  >
    <Container sx={{
      height: '100%',
      backdropFilter: 'blur(20px)',
    }}>
    <Heading className="map-center-text">
     THANK YOU FOR JOINING!
    </Heading>
    </Container>
  </Box>
)


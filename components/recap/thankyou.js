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

const Collab = ({ img, alt, url }) => (
  <Link href={url} target="_blank" sx={{ display: 'block', mx: 3, mb: [3, 4] }}>
    <Image src={img} alt={alt} sx={{ maxWidth: [112,224,224], maxHeight: [42,84,84] }} />
  </Link>
)

export default () => (
  <Box
    as="header"
    sx={{
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#338eda',
      clear: 'both',
      objectFit: 'cover',
      minHeight: '500px',
      backdropFilter: 'blur(20px)',
      backgroundPosition: 'center center',
      backgroundImage:
        'radial-gradient(at left top,rgba(247,255,0,0.66),rgb(0,255,255,0.66)), url("https://s7.gifyu.com/images/ezgif-4-727ac1653cd9.gif")'
    }}
  >
    <Container
      sx={{
        height: '100%',
        fontSize: [4,6]
      }}
      className="thank-you-text"
    >
      <br />
      <Heading mb={[3, 4]} sx={{ fontSize: [7,null,null] }}>
        Thank you for joining!
      </Heading>
      <Heading
          as="h3"
          variant="eyebrow"
          id="about"
          sx={{ color: 'white', mb: [3,4], mt: [4,5]}}
        >
          In collaboration with
        </Heading>
      <Flex
        sx={{
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto'
        }}
      >
        <Collab
          alt="GitHub"
          img="https://summer.hackclub.com/sponsors/github.svg"
          url="https://github.com/"
        />
        <Collab
          alt="Adafruit"
          img="https://summer.hackclub.com/sponsors/adafruit.png"
          url="https://adafruit.com/"
        />
        <Collab
          alt="Arduino"
          img="https://summer.hackclub.com/sponsors/arduino.svg"
          url="https://arduino.cc/"
        />
      </Flex>
    </Container>
  </Box>
)
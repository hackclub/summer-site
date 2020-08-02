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
      src="https://i.imgur.com/KzojkeC.png"
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


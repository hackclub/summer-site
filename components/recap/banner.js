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
import ColorSwitcher from '../color-switcher'

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

    <Image
      src="http://cloud-igjwtmiu6.vercel.app/ajzkvsf.png"
      sx={{
        mt: [5, '80px'],
        mb: [3, 4],
        objectFit: 'cover',
        minHeight: ['130px','200px','200px'],
        maxHeight: '400px'
      }}
    />
  </Box>
)


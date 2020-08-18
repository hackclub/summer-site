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
  Textarea,
  jsx
} from 'theme-ui'
import ColorSwitcher from './color-switcher'
import Mention from './mentionFancy'

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
      backgroundColor: '#3b47a8',
      clear: 'both'
    }}
  >
    <Container>
      <Container
        sx={{
          textAlign: ['left', 'center', 'center'],
          p:[0]
        }}
      >
        <Heading
          as="h1"
          sx={{
            mt: [3, 4],
            mb: [3],
            fontSize: 4
          }}
        >
          Fine art was produced during
        </Heading>
        <Heading
          as="h1"
          sx={{
            fontSize: [6,7,7]
          }}
        >
          Arts Week
        </Heading>
        <Button
          as="a"
          href="https://arts-gala.hackclub.dev"
          sx={{ color: 'white', mt: [3] }}
        >
          Explore the gala →
        </Button>
      </Container>
      <Grid
        columns={[null, 2, 3]}
        gap={3}
        mt={[3, 4]}
        mb={[3, 4]}
        sx={{ textAlign: 'center' }}
      >
        <Card
          className="pictureFrame"
          sx={{ background: 'white', m: 3, color: 'black!important' }}
        >
          <img
            width="100%"
            src="https://dl.airtable.com/.attachmentThumbnails/e4ed4d3cb696687f506d60aed5fa0988/36a8507d"
          />
          <br />
          <Text sx={{ color: 'black!important', mt: 1, mb: 1 }}>
            <Mention
              sx={{ color: 'black' }}
              username="e-lee-za"
              key="e-lee-zai"
            />
          </Text>
          <br />
        </Card>
        <Card
          className="pictureFrame"
          sx={{ background: 'white', m: 3, color: 'black!important' }}
        >
          <img
            width="100%"
            src="https://dl.airtable.com/.attachmentThumbnails/8d0e717964dd2ac4de571cb8aa20d6bc/c4a2189f"
          />
          <br />
          <Text sx={{ color: 'black!important', mt: 1, mb: 1 }}>
            <Mention
              sx={{ color: 'black' }}
              username="malte"
              key="maltei"
            />
          </Text>
          <br />
        </Card>
        <Card
          className="pictureFrame"
          sx={{ background: 'white', m: 3, color: 'black!important' }}
        >
          <img
            width="100%"
            src="https://dl.airtable.com/.attachmentThumbnails/79b3ebfda143d3145ecb1b1ea46aafe0/5bdcc39c"
          />
          <br />
          <Text sx={{ color: 'black!important', mt: 1, mb: 1 }}>
            <Mention
              sx={{ color: 'black' }}
              username="clairebookworm"
              key="clairebookwormi"
            />
          </Text>
          <br />
        </Card>
      </Grid>
    </Container>
  </Box>
)

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
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%235662c3' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E\")",
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
          href="https://events.hackclub.com/arts-gala"
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

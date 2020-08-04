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
    <Heading
      as="h1"
      sx={{
        mt: [3, 4],
        textAlign: 'center',
        fontSize: 4
      }}
      className="topHeaderSubtitle"
    >
      Fine art was produced during
    </Heading>
    <Heading
      as="h1"
      sx={{
        mb: [3, 4],
        textAlign: 'center',
        fontSize: 7
      }}
    >
      Arts Week
    </Heading>
    <Container>
      <Grid
        columns={[null, 2, 3]}
        gap={3}
        mt={[3, 4]}
        mb={[3, 4]}
        sx={{ textAlign: 'center' }}
      >
        <Card
          className="pictureFrame"
          sx={{ background: 'white', m: 4, color: 'black!important' }}
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
          sx={{ background: 'white', m: 4, color: 'black!important' }}
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
          sx={{ background: 'white', m: 4, color: 'black!important' }}
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
      </Grid>
      <Box
        sx={{
          paddingBottom: '30px',
          textAlign: 'center'
        }}
      >
        <Button
          as="a"
          variant="cta"
          href="https://scrapbook.hackclub.com/"
          sx={{ color: 'white' }}
        >
          Explore more →
        </Button>
      </Box>
    </Container>
  </Box>
)

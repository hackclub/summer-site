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
import Mention from './mentionAMA'

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
      <Grid columns={[null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px'
          }}
          p={[0]}
        >
          <Card
            sx={{
              backgroundImage: "url('https://i.imgur.com/5VEiUbc.mp4')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '440px',
              width: '100%',
              backgroundPosition: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}
            p={[3, 4]}
          ></Card>
          <Text
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
            p={[1, 2]}
          >
            AMA with Limor Fried
          </Text>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            textAlign: 'right',
            clear: 'both',
            background: 'none',
            backgroundPosition: 'center'
          }}
          p={[0]}
        >
          <Heading sx={{ fontSize: 2 }}>
            Chatting with influential people in tech on
          </Heading>
          <Heading as="h1" sx={{ fontSize: '74px' }}>
            inspiring AMAs
          </Heading>
          <Text sx={{ fontSize: 2 }}>
            <br />
            <Mention
              sx={{ color: 'black' }}
              name="Limor Fried (June 26th)"
              url="https://google.com"
              img="https://usasciencefestival.org/wp-content/uploads/2018/01/Limor-Fried-600x600.jpg"
            />
            <br />
            <br />
            <Mention
              sx={{ color: 'black' }}
              name="Dylan Field (July 10th)"
              url="https://google.com"
              img="https://dl.airtable.com/.attachmentThumbnails/10060ecb0494cc79d6000ceb95ca07c3/cbbb4caf"
            />
            <br />
            <br />

            <Mention
              sx={{ color: 'black' }}
              name="Tommy DeVoss (July 24th)"
              url="https://google.com"
              img="https://dl.airtable.com/.attachmentThumbnails/c2945a6e36439be2d1f9aae336ec6181/55c890d5.png"
            />
            <br />
            <br />

            <Mention
              sx={{ color: 'black' }}
              name="Alex Stamos (Aug 7th)"
              url="https://google.com"
              img="https://dl.airtable.com/.attachmentThumbnails/df51be717dd8e09204ec23b27336f4a7/acff2db0"
            />
          </Text>
          <br />
        </Card>
      </Grid>
    </Container>
  </Box>
)



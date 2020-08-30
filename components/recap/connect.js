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
      <Grid columns={[null, null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px',
            mb: ['10px', '10px', null],
            display: [null, null, 'none']
          }}
          p={[0]}
        >
          <Card
            sx={{
              backgroundImage: "url('https://i.imgur.com/QJcio5r.png')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '420px',
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
            Hack Night (Jul 26th)
          </Text>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            clear: 'both',
            background: 'none',
            backgroundPosition: 'center',
            textAlign: ['left', 'center', 'left']
          }}
          p={[0]}
        >
          <Heading>Finding new ways to</Heading>
          <Heading as="h1" sx={{ fontSize: [6, 7, 7], mt: '-20px' }}>
            connect
          </Heading>
          <Text
            sx={{ fontSize: [2, 2, 3], width: ['100%', '100%', '85%'], mt: [] }}
          >
            Thanks to COVID-19, this summer was like no other with billions of
            teenagers stuck at home. From treasure hunts to late night Zoom
            hangouts to a mini hackathon, the community was filled with fun
            events. Alongside events, the Slack served
            as a global makerspace (open 24/7) where hackers could hangout.
          </Text>
          <br />
          <Button variant="cta">Join the Slack</Button>
        </Card>
        
          <Card
            sx={{
              backgroundImage: "url('http://cloud-17duvco1r.vercel.app/qjcio5r.png')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '420px',
              width: '100%',
              backgroundPosition: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}
            p={[3, 4]}
          ></Card>
          
      </Grid>
    </Container>
  </Box>
)

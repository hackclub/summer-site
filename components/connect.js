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
      <Grid columns={[null, null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
      <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px',
            mb:['10px','10px',null],
            display: [null,null,'none'],
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
            textAlign: ['left', 'center', 'left'],
          }}
          p={[0]}
        >
          <Heading>Finding new ways to</Heading>
          <Heading as="h1" sx={{ fontSize: [6,7,7]}}>
            connect
          </Heading>
          <Text sx={{ fontSize: 2, width: ['100%','100%','85%'] }}>
            <br />
            This summer was like no other, over a billion teenagers found
            themselves stuck at home as a pandemic raged on outside.
            Participation in the Hack Club Slack skyrocketed, increasing by
            450%. Throughout the summer, we hosted events for Hack Clubbers to
            connect with one another.
          </Text>
          <br />
          <Button>Join the Slack</Button>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px',
            mb:['10px','10px',null],
            display: ['none','none','block'],
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
      </Grid>
    </Container>
  </Box>
)



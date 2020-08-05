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
import Mention from './mention'

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
              backgroundImage:
                "url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F60ad2208ccd0e6b089aaaedcfea3e7b3%2F9a5f647b%2F197E6FBE-1A90-4071-875C-12DFBD724400.jpeg')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '400px',
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
            Their sketch from the planning process
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
          <Heading>Using hardware to</Heading>
          <Heading as="h1" sx={{ fontSize: [6, 7, 7] }}>
            help others
          </Heading>
          <Text sx={{ fontSize: 2, width: ['100%','100%','85%'], mt:[2] }}>
            Ray Rumore, a 13 years old from New York, is using his hardware
            grant to learn how to program a microcontroller and build a
            “shoulder bot” to help his minimally-verbal sister (and others like
            her) to communicate.
          </Text>
          <br />
          <Button>Watch a video</Button>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px',
            display: ['none', 'none', 'block']
          }}
          p={[0]}
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F60ad2208ccd0e6b089aaaedcfea3e7b3%2F9a5f647b%2F197E6FBE-1A90-4071-875C-12DFBD724400.jpeg')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '400px',
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
            Their sketch from the planning process
          </Text>
        </Card>
      </Grid>
    </Container>
  </Box>
)

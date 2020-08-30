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
import Mention from '../mention'

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
                "url('https://cloud-qmfmc6mn0.vercel.app/ezgif-4-c2ab0bc72ca5.gif')",
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
          <Heading>Using hardware to store</Heading>
          <Heading as="h1" sx={{ fontSize: [6, 7, 7] }}>
            memories
          </Heading>
          <Text sx={{ fontSize: [2,2,3], width: ['100%','100%','85%'], mt:[2] }}>
            Sulthan Nizarudin, a 18-year-old from Kerala (India), used his hardware to create a
            polaroid-style camera to take fun photos with friends! The project uses a Raspberry Pi,
             a camera module, thermal printer and more!
          </Text>
          <br />
          <Button as='a' href="https://youtu.be/-SiU1nOm9JY">Watch a Demo</Button>
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
                "url('https://cloud-9hwthpo8l.vercel.app/ezgif-4-c2ab0bc72ca5.gif')",
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
            The camera part of the finished product
          </Text>
        </Card>
      </Grid>
    </Container>
  </Box>
)

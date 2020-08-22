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
      background: '#ff8c37',
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
            mb:['10px','10px',null]
          }}
          p={[0]}
        >
          <Card
            sx={{
              backgroundImage:
                "url('https://i.imgur.com/bJmUqbJ.png')",
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
            His final product running at his house
          </Text>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            textAlign: 'right',
            color: 'white',
            clear: 'both',
            textAlign: ['left', 'center', 'right'],
            background: 'none',
            backgroundPosition: 'center'
          }}
          p={[0]}
        >
          <Heading>Using hardware to help fix</Heading>
          <Heading as="h1" sx={{ fontSize: [6,7,7] }}>
            society
          </Heading>
          <Text sx={{ fontSize: [2,2,3], paddingLeft: ['0%','0%','15%'], right: 0, mt:[2] }}>
            Akash Hari, a 17 year old from India, has built a Smart Energy Meter that monitors 
            power usage and alerts a house owner when power consumption when it reaches particular threshold. 
            It helps save energy and makes the energy billing for efficient.
          </Text>
          <br />
          <Button>Watch a Demo</Button>
        </Card>
      </Grid>
    </Container>
  </Box>
)



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
                "url('https://i.imgur.com/IVVaFwd.jpg')",
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
            Her final product using a Pi camera
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
          <Heading>Using hardware to</Heading>
          <Heading as="h1" sx={{ fontSize: [6,7,7] }}>
            save lives
          </Heading>
          <Text sx={{ fontSize: [2,2,3], paddingLeft: ['0%','0%','15%'], right: 0, mt:[2] }}>
            Ellen Xu, a 15 year old from San Diego, is developing a machine
            learning algorithm which can run on a Raspberry Pi in order to help
            people diagnose Kawasaki disease, the #1 heart disease in children
            in the U.S. and Japan.
          </Text>
          <br />
          <Button>Let them teach you more about KD</Button>
        </Card>
      </Grid>
    </Container>
  </Box>
)


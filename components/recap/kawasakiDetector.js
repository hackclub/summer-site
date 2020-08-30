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
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23ea7f30' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E\")",
      clear: 'both'
    }}
  >
    <Container>
      <Grid columns={[null, null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
        
          <Card
            sx={{
              backgroundImage: "url('https://cloud-fx1vo1lur.vercel.app/ivvafwd-2-2.jpg')",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '400px',
              width: '100%',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
            p={[3, 4]}
          ></Card>
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



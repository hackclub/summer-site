import { Box, Card, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui'
import Image from './imagecard'

export default () => (
  <Box
    as="section"
    sx={{
      background: '#ff8c37',
      color: 'white',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23ea7f30' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E\")"
    }}
  >
    <Grid
      variant="layout.container"
      columns={[null, null, 2]}
      gap={[3, 4, 5]}
      py={[4, 5]}
    >
      <Image
        url="https://cloud-po4i3yi0s.vercel.app/2020-08-31_cma1mku7kh11cvgvq0ddjdz7m6237bmp.jpeg"
        content="Ellen’s Raspberry Pi creation"
      />
      <Box>
        <Heading>Using hardware to</Heading>
        <Heading as="h1" sx={{ fontSize: [6, 7, 7], fontFamily: 'display' }}>
          save lives
        </Heading>
        <Text
          as="p"
          sx={{
            fontSize: [2, 2, 3],
            mt: 2
          }}
        >
          Ellen Xu, a 15-year-old from San Diego, made a machine learning
          algorithm to run on a Raspberry Pi to help people diagnose Kawasaki
          disease, the #1 heart disease in children in the U.S. & Japan.
        </Text>
      </Box>
    </Grid>
  </Box>
)

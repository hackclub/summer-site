import { Box, Container, Heading } from 'theme-ui'

export default () => (
  <Box
    as="section"
    sx={{
      py: [5, 6],
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundColor: '#338eda',
      backgroundPosition: 'center center',
      backgroundImage:
        'radial-gradient(at left top,rgba(247,255,0,0.66),rgb(0,255,255,0.66)),url(https://cloud-pfqlpiv8t.vercel.app/kzojkec-2.png)'
    }}
  >
    <Container variant="copy">
      <Heading
        as="h2"
        sx={{
          color: 'white',
          fonyFamily: 'heading',
          fontSize: [5, 6],
          textAlign: 'center',
          textShadow: 'text'
        }}
      >
        Shipping hardware grants to everywhere from the bustling streets of
        Lagos to the middle of Los Angeles…
      </Heading>
    </Container>
  </Box>
)

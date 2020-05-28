import SignupForm from '../components/signup-form'
import Nav from '../components/nav'
import { Box, Heading, Container } from 'theme-ui'

export default () => (
  <>
    <Nav />
    <Box
      as="header"
      sx={{
        bg: 'dark',
        pt: [5, 6],
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        '@media (hover: hover)': { backgroundAttachment: 'fixed' }
      }}
    >
      <Container pt={[3, 4]} pb={[5, 6]}>
        <Heading
            as="h1"
            variant="title"
            sx={{
              mt: 0,
              mb: [3, 4, 5],
              fontSize: [6, 8, 9],
              textAlign: 'center',
              color: 'white',
              lineHeight: [0.875, 0.8],
              position: 'relative',
              zIndex: 1,
              textShadow: 'text'
            }}
          >
          Pre-Register
        </Heading>
        <SignupForm />
      </Container>
    </Box>
  </>
)
import {
  Box,
  IconButton,
  Container,
  Card,
  Image,
  Text,
  Flex,
  Heading,
  Button,
  Grid,
  Avatar,
  Badge,
  Link as A
} from 'theme-ui'

const Scrapbook = ({ image, image1 }) => {

  return (
    <Box
      as="section"
      sx={{ bg: 'white', color: 'black', position: 'relative', pb: [4, 5] }}
    >
      <Container>
        <Grid
          columns={[2, 15]}
          gap={3}
          sx={{
            py: [3, 4],
            h3: { my: 0 },
            '> div': {
              px: [2, 3],
              py: [4, 4],
              display: 'flex',
              flexDirection: 'column',
              gridColumn: ['span 1', 'span 3'],
              position: 'relative'
            },
            h3: {
              variant: 'text.headline',
              color: 'white',
              lineHeight: 'title',
              my: 0
            }
          }}
        >
          <Box
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 2', 'span 3']
            }}
          >
            <Heading
              as="h2"
              variant="headline"
              sx={{
                mt: 0,
                color: 'red',
                letterSpacing: 'headline'
              }}
            >
              Summer Scrapbook
            </Heading>
            <Heading
              as="h4"
              variant="subheadline"
              sx={{
                mt: 0,
                letterSpacing: 'headline'
              }}
            >
              Hack Clubbers are sharing everything they make in their personal scrapbook.
            </Heading>
            <Button
              as="a"
              variant="cta"
              href="https://scrapbook.hackclub.com"
              target="_blank"
              mt={4}
              mb={[null, 4, 5]}
              sx={{ backgroundImage: t => t.util.gradient('red', 'orange') }}
            >
              Explore
            </Button>
          </Box>
          {image1 && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 2', 'span 6'],
              bg: 'dark',
              backgroundImage:
                `url(${image1})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
          {image && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 2', 'span 6'],
              bg: 'dark',
              backgroundImage:
                `url(${image})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
          <Card bg="cyan">
            <h3>#lounge</h3>
          </Card>
          <Card bg="orange">
            <h3>#support</h3>
          </Card>
          <Card bg="blue">
            <h3>#code</h3>
          </Card>
          <Card
            bg="red"
            sx={{
              backgroundImage: ({ colors }) =>
                `linear-gradient(${colors.red} 0%, ${colors.red} 16.6666%, ${colors.orange} 16.6666%, ${colors.orange} 33.333%, ${colors.yellow} 33.333%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 66.6666%, ${colors.blue} 66.6666%, ${colors.blue} 83.3333%, #8067C3 83.3333%, #8067C3 100%)`
            }}
          >
            <h3>#lgbtq</h3>
          </Card>
          <Card bg="dark">
            <h3>#gamedev</h3>
          </Card>
          <Card bg="red">
            <h3>#design</h3>
          </Card>
          <Card bg="green">
            <h3>
              #photo-
              <br />
              graphy
            </h3>
          </Card>
          <Card
            bg="yellow"
            sx={{
              backgroundImage:
                'url(https://cdn.glitch.com/a7605379-7582-4aac-8f44-45bbdfca0cfa%2FImage%20from%20iOS%202.jpg?v=1587695033603)',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              textShadow: 'text'
            }}
          >
            <h3>#dogs</h3>
          </Card>
          <Card bg="green">
            <h3>#music</h3>
          </Card>
        </Grid>
      </Container>
    </Box>
  )
}

export default Scrapbook

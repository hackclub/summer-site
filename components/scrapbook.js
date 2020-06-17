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

const Scrapbook = ({ image, image1, image2, image3, image4, image5, image6, image7, image8 }) => {

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
          {image2 && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 1', 'span 3'],
              bg: 'dark',
              backgroundImage:
                `url(${image2})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
          {image3 && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 1', 'span 3'],
              bg: 'dark',
              backgroundImage:
                `url(${image3})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
          {image4 && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 1', 'span 3'],
              bg: 'dark',
              backgroundImage:
                `url(${image4})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
          {image5 && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 1', 'span 3'],
              bg: 'dark',
              backgroundImage:
                `url(${image5})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
          {image6 && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 1', 'span 3'],
              bg: 'dark',
              backgroundImage:
                `url(${image6})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
          {image7 && (
          <Card
            as="aside"
            sx={{
              gridRow: [null, 'span 2'],
              gridColumn: ['span 1', 'span 3'],
              bg: 'dark',
              backgroundImage:
                `url(${image7})`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              p: { color: 'smoke', fontSize: 2, mt: 1, lineHeight: 'caption' }
            }}
          >
          </Card>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default Scrapbook

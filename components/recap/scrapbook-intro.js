import { Container, Link, Text } from 'theme-ui'

export default () => (
  <Container
    variant="copy"
    sx={{
      my: [3, 4],
      py: [3, 4],
      border: '2px dashed',
      borderColor: 'sunken',
      borderRadius: 'default'
    }}
  >
    <Text as="p" sx={{ fontSize: '24px' }}>
      As part of Summer of Making we built{' '}
      <Link
        color="orange"
        href="https://scrapbook.hackclub.com"
        sx={{ textDecoration: 'none' }}
      >
        Scrapbook
      </Link>
      . The idea:{' '}
      <span className="highlight">
        share updates of what you’re working on every day.
      </span>{' '}
      So as Hack Clubbers are learning & building projects, short video or photo
      updates go into a Slack channel. Through a Slack bot, an Airtable, & a
      Next.js website making everything browsable, we made a site{' '}
      <span className="highlight">
        full of amazing things built this summer.
      </span>
    </Text>
  </Container>
)

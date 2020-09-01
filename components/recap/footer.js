import { Box, Heading, Text } from 'theme-ui'
import Link from 'next/link'
import Footer from '../footer'

const Credit = () => (
  <Box sx={{ a: { color: 'orange' }, pb: 4 }}>
    <Heading as="h3" variant="subheadline" mb={2}>
      <a href="/landing"> ⏮</a> A project by{' '}
      <a href="https://hackclub.com/">Hack Club</a>.
    </Heading>
    <Text as="p" variant="caption" mb={3} sx={{ width: ['85%', '75%', '60%'] }}>
      Thank you: Sam Poder, Lachlan Campbell, Zach Latta, Roshan Palakkal, Neel
      Redkar, Matthew Stanciu, Chris Walker, Max Wofford, Athul Blesson, Amogh
      Chaubey, Dina Elhanan, Chaleb Pommells, Annlee Fores, Michael Destefanis,
      Melody & Christina Asquith.
    </Text>
    <Text as="p" variant="caption" mb={1}>
      Recap site by <a href="https://sampoder.com/">@sampoder</a>. Always{' '}
      <a href="https://github.com/hackclub/summer-site">open source</a>.
    </Text>
  </Box>
)

export default () => (
  <Footer>
    <Credit />
  </Footer>
)

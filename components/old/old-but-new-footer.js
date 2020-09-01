import { Box, Container, Image, Grid, Heading, Link, Text } from 'theme-ui'

export default () => (
  <Box as="footer" sx={{ py: [4, 5], a: { color: 'orange' } }}>
    <Container>
      <Heading as="h3" variant="subheadline" mb={2}>
        <a href="https://summer.hackclub.com/super-og"> ⏮</a> A project by{' '}
        <a href="https://hackclub.com/">Hack Club</a>.
      </Heading>
      <Text
        as="p"
        variant="caption"
        mb={3}
        sx={{ width: ['85%', '75%', '60%'] }}
      >
        Thank you: Sam Poder, Lachlan Campbell, Zach Latta, Roshan Palakkal,
        Neel Redkar, Matthew Stanciu, Chris Walker, Max Wofford, Athul Blesson,
        Amogh Chaubey, Dina Elhanan, Chaleb Pommells, Annlee Fores, Michael
        Destefanis, Melody & Christina Asquith.
      </Text>
      <Text as="p" variant="caption" mb={1}>
        Pre-launch site by <a href="https://lachlanjc.com/">@lachlanjc</a>.
        Always{' '}
        <a href="https://github.com/hackclub/summer-site/">open source</a>.
      </Text>
      <Text
        as="p"
        variant="caption"
        sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: '#C0CCDA' }}
      >
        © 2020 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)
      </Text>
    </Container>
  </Box>
)

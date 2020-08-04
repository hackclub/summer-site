import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Image, Grid, Heading, Link, Text } from 'theme-ui'
import theme from '@hackclub/theme'
import Icon from './icon'

export default () => (
  <Box as="footer" sx={{ py: [4, 5], a: { color: 'orange' } }}>
    <Container>
      <Heading as="h3" variant="subheadline" mb={2}>
        A project by <a href="https://hackclub.com/">Hack Club</a>.
      </Heading>
      <Text as="p" variant="caption" mb={3}>
        Thank you: Sam Poder, Lachlan Campbell, Zach Latta, Roshan Palakkal,
        Neel Redkar, Matthew Stanciu, Chris Walker, Max Wofford.
      </Text>
      <Text as="p" variant="caption" mb={1}>
        Site by <a href="https://lachlanjc.com/">@lachlanjc</a>. Always{' '}
        <a href="https://github.com/hackclub/summer-site/">open source</a>.
        Graphics from{' '}
        <a href="https://github.com/fritzing/fritzing-parts">Fritzing</a>.
      </Text>
      <Text as="p" variant="caption">
        Following the{' '}
        <a href="https://hackclub.com/conduct/">Hack Club Code of Conduct</a>.
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

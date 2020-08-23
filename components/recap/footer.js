import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Image, Grid, Heading, Link, Text } from 'theme-ui'
import theme from '@hackclub/theme'
import Icon from '../icon'

const Blinking = styled('p')`
  position: relative;
  display: inline-block;
  line-height: 1;
  &:before,
  &:after {
    content: '${(props) => props.children}';
    position: absolute;
    top: 0;
    color: ${theme.colors.smoke};
    background: ${theme.colors.dark};
    overflow: hidden;
    clip: rect(0, 512px, 0, 0);
  }
  &:after {
    left: 2px;
    text-shadow: -2px 0 ${theme.colors.primary};
    animation: glitch2 4s infinite linear alternate-reverse;
    
  }
  &:before {
    left: -2px;
    text-shadow: -2px 0 ${theme.colors.info};
    animation: glitch2 4s infinite linear alternate-reverse;
    
  }
`


export default () => (
  <Box as="footer" sx={{ py: [4, 5], a: { color: 'orange' } }} className="theFooter">
    <Container>
      <Heading as="h3" variant="subheadline" mb={2}>
        <a href="/landing"> ⏮</a>  A project by <a href="https://hackclub.com/">Hack Club</a>.
      </Heading>
      <Text as="p" variant="caption" mb={3} sx={{ width: ['85%','75%','60%']}}>
        Thank you: Sam Poder, Lachlan Campbell, Zach Latta, Roshan Palakkal,
        Neel Redkar, Matthew Stanciu, Chris Walker, Max Wofford, Athul Blesson, Amogh Chaubey,
        Dina Elhanan, Chaleb Pommells, Annlee Fores, Michael Destefanis, <span className="magicalhover">some textt</span> & Christina Asquith.
      </Text>
      <Text as="p" variant="caption" mb={1}>
        Recap site by <a href="https://sampoder.com/">@sampoder</a>. Always{' '}
        <a href="https://github.com/hackclub/summer-site/">open source</a>.
      </Text>
      <Text as="p" variant="caption">
        View the{' '}
        <a href="/landing"> original site</a> by <a href="https://lachlanjc.com/">@lachlanjc</a>.
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

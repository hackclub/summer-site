import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Image, Grid, Heading, Link, Text } from 'theme-ui'
import theme from '@hackclub/theme'
import Icon from './icon'

export default () => (
  <Container
    variant="copy"
    sx={{
      my: 3,
      py: 3,
      border: '2px dashed',
      borderColor: 'sunken',
      borderRadius: 'default',
      mt: [3, 4],
      mb: [3, 4]
    }}
  >
    <Text
      sx={{
        fontSize: '24px'
      }}
    >
      We focus a lot on software at Hack Club. It's soft, after all.
      Comfortable. This summer we left our comfort zone. Global
      pandemic—generally a bad start to summer—left us with $50k of unused grant
      money from GitHub. We thought about saving it. Instead we gave it away to
      students as a kind of fun experiment. One thing we liked about hardware
      grants was that bits—however magical—are ultimately constrained by atoms.
      It seemed right to connect over building physical things during a summer
      when personal connections relied on the internet more than ever.
    </Text>
  </Container>
)

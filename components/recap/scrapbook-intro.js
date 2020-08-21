import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Image, Grid, Heading, Link, Text } from 'theme-ui'
import theme from '@hackclub/theme'
import Icon from '../icon'

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
      As part of Summer of Making we built Scrapbook. The idea is to <span className ="highlight">share
      updates of what you’re working on every day:</span> every day this summer, Hack
      Clubbers are learning & building projects, sharing short video or photo
      updates via a Slack channel. Through a Slack bot, an Airtable, & a Next.js
      website that makes everything browsable. The response was amazing and the
      site is <span className ="highlight">full of amazing things build this summer</span>.
    </Text>
  </Container>
)

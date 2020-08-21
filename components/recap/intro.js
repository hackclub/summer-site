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
      In 1967, 100,000 people gathered in San Francisco for the Summer of Love.
      In 2020, we at Hack Club hosted the Summer of Making. It wasn't an event
      or a program. <span className="highlight">It was a theme for the summer and a challenge for students
      to take on.</span> It was also a summer like no other, with hackers around the
      world stuck at home. To support makers, we distributed $50,000 in free
      electronics (thanks GitHub!) & built Snapchat streaks for coding—<span className="highlight">but
      really Summer of Making was about the makers</span>. We left it them to get
      hacking & they built some pretty awesome things...
    </Text>
  </Container>
)

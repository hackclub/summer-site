import React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Container,
  Card,
  Image,
  Grid,
  Heading,
  Link,
  Text
} from 'theme-ui'
import theme from '@hackclub/theme'
import Icon from '../icon'
import Mention from '../mention'

export default ({ content, url, mention, aftercontent }) => (
  <Card
    as="figure"
    sx={{
      backgroundSize: 'cover',
      color: 'white',
      backgroundPosition: 'center',
      borderRadius: '20px',
      boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
      p: [0, 0],
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)'
      }
    }}
  >
    <Card
      sx={{
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        height: '400px',
        width: '100%',
        backgroundPosition: 'center',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        maxHeight: '432px'
      }}
      p={[3, 4]}
      variant="secondary"
    />
    <Text
      as="figcaption"
      sx={{
        position: 'relative',
        textAlign: 'center'
      }}
      p={[1, 2]}
    >
      {content} {mention && <Mention username={mention} />} {aftercontent}
    </Text>
  </Card>
)

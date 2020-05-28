import React from 'react'
import { Box } from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const fadeIn = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } })

const Wrapper = styled(Box)`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

const FadeIn = ({ duration = 3, delay = 0, ...props }) => (
  <Wrapper
    {...props}
    style={{
      ...(props.style || {}),
      animationDuration: duration + 's',
      animationDelay: delay + 'ms'
    }}
  />
)

export default FadeIn

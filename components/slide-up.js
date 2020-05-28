import React from 'react'
import { Box } from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import usePrefersMotion from '../lib/use-prefers-motion'

const slideUp = keyframes({
  from: { transform: 'translateY(100%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 }
})

const SlideUp = ({ duration = 300, delay = 0, ...props }) => {
  const prefersMotion = usePrefersMotion()
  console.log('slide', prefersMotion)
  if (prefersMotion) {
    return (
      <Box
        {...props}
        sx={{
          ...(props.sx || {}),
          '@media (prefers-reduced-motion: no-preference)': {
            animationName: slideUp,
            animationFillMode: 'backwards',
            animationDuration: duration + 'ms',
            animationDelay: delay + 'ms'
          }
        }}
      />
    )
  } else {
    return props.children
  }
}

export default SlideUp

import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'

const bounce = keyframes`
  0% {
    opacity: 0.75;
    transform: translateX(-50%) translate3d(-100%, 0, 0) rotate(-120deg)
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateZ(0)
  }
`

const Hardware = () => [
  <Box
    key="video"
    as="video"
    muted
    autoPlay
    playsInline
    loop
    sx={{
      width: '100%',
      maxWidth: 'layout',
      maxHeight: '66vh',
      left: '50%',
      transform: 'translateX(-50%)',
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
      paddingTop: '16px'
    }}
  >
    <source
      src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fcircuit.hevc.mp4?v=1590594547077"
      type="video/mp4; codecs=hevc"
    />
    <source
      src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fcircuit.webm?v=1590595137054"
      type="video/webm; codecs=vp9,opus"
    />
    <source
      src="https://cdn.glitch.com/3899929b-9aed-4dae-b1e6-230ef0ed4d51%2Fcircuit.mov?v=1590594547333"
      type="video/mov"
    />
    Video of blinking LED circuit board
  </Box>,
  <Box
    key="sunglasses"
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 500.532"
    version="1.1"
    sx={{
      left: '50%',
      bottom: '15%',
      width: [256, 384, 512],
      height: [128, 192, 256],
      transform: 'translateX(-50%)',
      position: 'absolute',
      zIndex: 1,
      '@media (prefers-reduced-motion: no-preference)': {
        animation: `${bounce} 1s linear`
      },
      transformOrigin: 'center bottom'
    }}
  >
    <g transform="translate(-45.883 -227.6)">
      <g transform="matrix(1.65161 0 0 1.65161 -29.898 -255.928)">
        <path
          fill="#fff"
          d="M40 0v20h120v20h20v20h20v20h20v20h120V80h20V60h20V40h40v20h20v20h140V60h20V40h20V0H40zm0 20H0v20h40V20z"
          transform="translate(45.883 292.76)"
        />
        <path
          fill="#000"
          d="M200 20v20h20V20h-20zm20 20v20h20V40h-20zm20 0h20V20h-20v20zm20 0v20h20V40h-20zm20 20v20h20V60h-20zm-20 0h-20v20h20V60z"
          transform="translate(45.883 292.76)"
        />
        <path
          fill="#000"
          d="M485.883 312.76h20v20h20v-20h20v20h20v20h-20v-20h-20v20h-20v-20h-20v-20z"
        />
      </g>
    </g>
  </Box>
]

export default Hardware

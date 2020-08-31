import { Box, Card, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui'
import Video from './video'

export default () => (
  <Box as="section" sx={{ py: [4, 5] }}>
    <Grid variant="layout.container" columns={[null, null, 2]} gap={[3, 4, 5]}>
      <Box className="ledborder">
        <Heading>Using hardware to</Heading>
        <Heading as="h1" sx={{ fontSize: [6, 7, 7], fontFamily: 'display' }}>
          have <span className="ledHoverEffect">fun</span>
        </Heading>
        <Text
          sx={{ fontSize: [2, 2, 3], width: ['100%', '100%', '85%'], mt: [2] }}
        >
          Everyone loves LEDs, and they were super popular this summer! Patrick
          & Addison from Illinois worked on a Smart Album Cover Display, that
          detects the currently playing song through a microphone and shows the
          album art.
        </Text>
      </Box>
      <Video
        mux="51pEN301006xaiYL8m00IFulJpgzVRisfEh1cKIgfd15Ro"
        style={{ width: '100%', borderRadius: '10px' }}
      />
    </Grid>
  </Box>
)

import { Box, Card, Container, Flex, Grid, Heading, Text } from 'theme-ui'
import Video from './video'

export default () => (
  <Box as="section" sx={{ py: [4, 5] }}>
    <Grid variant="layout.container" columns={[null, null, 2]} gap={[3, 4, 5]}>
      <Box>
        <Heading>Using hardware to store</Heading>
        <Heading as="h1" sx={{ fontSize: [6, 7, 7], fontFamily: 'display' }}>
          memories
        </Heading>
        <Text
          sx={{
            fontSize: [2, 2, 3],
            width: ['100%', '100%', '85%'],
            mt: [2]
          }}
        >
          Sulthan Nizarudin, a 18-year-old from Kerala (India), used his
          hardware to create a polaroid-style camera to take fun photos with
          friends! The project uses a Raspberry Pi, a camera module, thermal
          printer and more!
        </Text>
      </Box>
      <Video
        mux="uzmqHFNDz7tghgSSLUpMjOC9tMgQED024qzVyTK2oKhs"
        style={{ width: '100%', borderRadius: '10px' }}
      />
    </Grid>
  </Box>
)

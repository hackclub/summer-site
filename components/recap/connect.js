import { Box, Button, Grid, Heading, Text } from 'theme-ui'
import Icon from '@hackclub/icons'
import Image from './imagecard'
import Mention from './mentionAMA'

export default () => (
  <Grid
    as="section"
    py={[4, 5]}
    variant="layout.container"
    columns={[null, null, 2]}
    gap={[3, 4]}
  >
    <Box sx={{ textAlign: ['left', 'center', 'left'] }}>
      <Heading>Finding new ways to</Heading>
      <Heading as="h1" sx={{ fontSize: [6, 7], mt: -2, fontFamily: 'display' }}>
        connect
      </Heading>
      <Text as="p" sx={{ fontSize: [2, 2, 3], mb: [3, 4] }}>
        Thanks to COVID-19, this summer was like no other with so many teenagers
        stuck at home. From treasure hunts to late night Zoom hangouts to a mini
        hackathon, the community was filled with fun events. Alongside events,
        the Slack served as a global makerspace (open 24/7) where hackers could
        hang out.
      </Text>
      <Button as="a" href="https://hackclub.com/slack/">
        <Icon glyph="slack" />
        Join the Slack →
      </Button>
    </Box>
    <Image
      url="https://cloud-3hv9rbzjd.vercel.app/2020-08-30_27kycym0vumu57gncfgj0dckpkqf4t3t.jpeg"
      content="Hack Night (Jul 26th)"
    />
  </Grid>
)

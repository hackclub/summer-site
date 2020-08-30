import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Image,
  Text
} from 'theme-ui'
import Mention from './mentionAMA'
import Video from './video'

export default () => (
  <Grid
    as="section"
    variant="layout.container"
    columns={[null, null, 2]}
    gap={[3, 4]}
    mt={[4, 5]}
    mb={[3, 4]}
    sx={{ alignItems: 'start' }}
  >
    <Video style={{width: "100%", borderRadius: '10px'}} mux="uzmqHFNDz7tghgSSLUpMjOC9tMgQED024qzVyTK2oKhs" />
    <Box
      sx={{
        textAlign: ['left', 'center', 'right']
      }}
    >
      <Heading sx={{ fontSize: 2 }}>
        Chatting with influential people in tech on
      </Heading>
      <Heading as="h1" sx={{ fontSize: '74px' }}>
        inspiring AMAs
      </Heading>
      <Grid
        columns={2}
        gap={3}
        mt={[3, 4]}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Mention
          name="Limor Fried"
          url="https://www.youtube.com/watch?v=IWFtj9cCaB0"
          img="https://cloud-8be4hh8an.vercel.app/limor-fried-600x600-2-2.jpg"
        />
        <Mention
          name="Dylan Field"
          url="https://www.youtube.com/watch?v=fDKYjX37cbo"
          img="https://dl.airtable.com/.attachmentThumbnails/10060ecb0494cc79d6000ceb95ca07c3/cbbb4caf"
        />
        <Mention
          name="Tommy DeVoss"
          url="https://www.youtube.com/watch?v=tDtBCcLJ2xU"
          img="https://cloud-j5284260u.vercel.app/55c890d5-2.png"
        />
        <Mention
          name="Alex Stamos"
          url="https://www.youtube.com/watch?v=thXsjHVcxx4"
          img="https://dl.airtable.com/.attachmentThumbnails/df51be717dd8e09204ec23b27336f4a7/acff2db0"
        />
        <Mention
          name="Nicky Case"
          url="https://www.youtube.com/watch?v=KKEYTSUvsS8"
          img="https://dl.airtable.com/.attachmentThumbnails/43c443b80f58f0f3dd3f81124bf2bf6e/9a1a83c4"
        />
        <Mention
          name="View more"
          url="https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w"
          img="https://cloud-l3duqdxde.vercel.app/rxfcdi1.png"
        />
      </Grid>
    </Box>
  </Grid>
)

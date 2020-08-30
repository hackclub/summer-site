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
    
    <Box
      sx={{
        textAlign: 'center',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
      mt={[3, 4]}
      mb={[3, 4]}
    >
      <Heading sx={{ fontSize: 2 }}>
        Chatting with influential people in tech on
      </Heading>
      <Heading as="h1" sx={{ fontSize: [6, 7, 7] }}>
        inspiring AMAs
      </Heading>
      <Grid
        columns={[2,3,5]}
        gap={2}
        mt={[3, 4]}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Box style={{position: 'relative'}} as="a" href="https://www.youtube.com/watch?v=IWFtj9cCaB0" variant="interactive">
          <Image src="https://cloud-8be4hh8an.vercel.app/limor-fried-600x600-2-2.jpg" style={{ borderRadius: '10px' }} />
          <p style={{position: 'absolute', bottom: '0', width:'100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: 'white', marginBlockEnd: '0.4em', borderRadius: '10px'}}>Limor Fried</p>
        </Box>
        <Box style={{position: 'relative'}} as="a" href="https://www.youtube.com/watch?v=fDKYjX37cbo" variant="interactive">
          <Image src="https://cloud-b3z9crw81.vercel.app/4946a9bca0943aa959cb6c8b72c0cc17-2.png" style={{ borderRadius: '10px' }} />
          <p style={{position: 'absolute', bottom: '0', width:'100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: 'white', marginBlockEnd: '0.4em', borderRadius: '10px'}}>Dylan Field</p>
        </Box>
        <Box style={{position: 'relative'}} as="a" href="https://www.youtube.com/watch?v=tDtBCcLJ2xU" variant="interactive">
          <Image src="https://cloud-lrygi0a7b.vercel.app/tommy-devoss_trans__nwjyn5afh1f8m-ugcq32yesxdvobhlbzzp-a_kknc4m-2.jpg" style={{ borderRadius: '10px' }} />
          <p style={{position: 'absolute', bottom: '0', width:'100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: 'white', marginBlockEnd: '0.4em', borderRadius: '10px'}}>Tommy DeVoss</p>
        </Box>
        <Box style={{position: 'relative'}} as="a" href="https://www.youtube.com/watch?v=thXsjHVcxx4" variant="interactive">
          <Image src="https://dl.airtable.com/.attachmentThumbnails/df51be717dd8e09204ec23b27336f4a7/acff2db0" style={{ borderRadius: '10px' }} />
          <p style={{position: 'absolute', bottom: '0', width:'100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.6)', color: 'white', marginBlockEnd: '0.4em', borderRadius: '10px'}}>Alex Stamos</p>
        </Box>
        <Box style={{position: 'relative'}} as="a" href="https://www.youtube.com/watch?v=KKEYTSUvsS8" variant="interactive">
          <Image src="https://cloud-n74ym17dx.vercel.app/540px-nicky_case_-_game_developers_conference_2019_-_03.jpg" style={{ borderRadius: '10px' }} />
          <p style={{position: 'absolute', bottom: '0', width:'100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: 'white', marginBlockEnd: '0.4em', borderRadius: '10px'}}>Nicky Case</p>
        </Box>
      </Grid>
      <Button mt={3,4} as="a" href="https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w">Watch more on Youtube</Button>
    </Box>
)

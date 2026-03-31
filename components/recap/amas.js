import { Box, Button, Card, Grid, Heading, Image, Text } from 'theme-ui'
import Mention from './mentionAMA'

const AMA = ({ name, href, src }) => (
  <Card
    as="a"
    href={href}
    target="_blank"
    variant="interactive"
    sx={{
      position: 'relative',
      height: '200px',
      background: 'none',
      borderRadius: 10,
      overflow: 'hidden',
      lineHeight: 0
    }}
  >
    <Image src={src} alt={name} loading="lazy" sx={{ height: 'auto' }} />
    <Text
      as="p"
      sx={{
        position: 'absolute',
        bottom: 3,
        py: 1,
        lineHeight: 'caption',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.375)',
        color: 'white'
      }}
    >
      {name}
    </Text>
  </Card>
)

export default () => (
  <Box
    as="section"
    sx={{
      textAlign: 'center',
      maxWidth: '1200px',
      py: [4, 5],
      mx: 'auto'
    }}
  >
    <Heading sx={{ fontSize: 3 }}>
      Chatting with influential people in tech on
    </Heading>
    <Heading as="h1" sx={{ fontSize: [6, 7], fontFamily: 'display' }}>
      inspiring AMAs
    </Heading>
    <Grid
      columns={[2, 3, 5]}
      gap={2}
      pt={[3, 4]}
      mb={[4, 5]}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <AMA
        name="Limor Fried"
        src="https://cdn.hackclub.com/019d4420-d602-7578-b644-3433cd299d46/limor-fried-600x600-2-2%20(1).jpg"
        href="https://www.youtube.com/watch?v=IWFtj9cCaB0"
      />
      <AMA
        name="Dylan Field"
        href="https://www.youtube.com/watch?v=fDKYjX37cbo"
        src="https://cdn.hackclub.com/019d4422-c165-7395-a073-bd49dee99509/2020-08-31_9p70chuf0mgb95ujqe8hb8p9va29vpj0.png"
      />
      <AMA
        src="https://cdn.hackclub.com/019d4421-e974-7e2a-a003-ba54b0ecb97c/tommy-devoss_trans__nwjyn5afh1f8m-ugcq32yesxdvobhlbzzp-a_kknc4m-2%20(1).jpg"
        href="https://www.youtube.com/watch?v=tDtBCcLJ2xU"
        name="Tommy DeVoss"
      />
      <AMA
        src="https://cdn.hackclub.com/019d4422-3b79-7bd0-900f-02133202933b/images.jpeg"
        href="https://www.youtube.com/watch?v=thXsjHVcxx4"
        name="Alex Stamos"
      />
      <AMA
        href="https://www.youtube.com/watch?v=KKEYTSUvsS8"
        src="https://cdn.hackclub.com/019d4422-8016-7d3f-9ce2-9382a9782d68/540px-nicky_case_-_game_developers_conference_2019_-_03.webp"
        name="Nicky Case"
      />
    </Grid>
    <Button
      as="a"
      href="https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w"
    >
      Watch them on YouTube →
    </Button>
  </Box>
)

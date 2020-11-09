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
        src="https://cloud-8be4hh8an.vercel.app/limor-fried-600x600-2-2.jpg"
        href="https://www.youtube.com/watch?v=IWFtj9cCaB0"
      />
      <AMA
        name="Dylan Field"
        href="https://www.youtube.com/watch?v=fDKYjX37cbo"
        src="https://cloud-qhfqp5xvu.vercel.app/2020-08-31_9p70chuf0mgb95ujqe8hb8p9va29vpj0.png"
      />
      <AMA
        src="https://cloud-lrygi0a7b.vercel.app/tommy-devoss_trans__nwjyn5afh1f8m-ugcq32yesxdvobhlbzzp-a_kknc4m-2.jpg"
        href="https://www.youtube.com/watch?v=tDtBCcLJ2xU"
        name="Tommy DeVoss"
      />
      <AMA
        src="https://dl.airtable.com/.attachmentThumbnails/df51be717dd8e09204ec23b27336f4a7/acff2db0"
        href="https://www.youtube.com/watch?v=thXsjHVcxx4"
        name="Alex Stamos"
      />
      <AMA
        href="https://www.youtube.com/watch?v=KKEYTSUvsS8"
        src="https://cloud-n74ym17dx.vercel.app/540px-nicky_case_-_game_developers_conference_2019_-_03.jpg"
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

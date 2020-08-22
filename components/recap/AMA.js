import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Image,
  Text,
  Textarea
} from 'theme-ui'
import Mention from './mentionAMA'

export default () => (
  <Box
    as="header"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      height: '75%',
      clear: 'both'
    }}
  >
    <Container>
      <Grid columns={[null, null, 2]} gap={3} mt={[4, 5]} mb={[3, 4]}>
        <Card
          sx={{
            backgroundSize: 'cover',
            color: 'white',
            clear: 'both',
            backgroundPosition: 'center',
            borderRadius: '20px',
            mb: ['10px', '10px', null]
          }}
          p={[0]}
        >
          <Card
            sx={{
              backgroundImage: "url(https://i.imgur.com/OZTd3qt.gif)",
              backgroundSize: 'cover',
              color: 'white',
              clear: 'both',
              height: '440px',
              width: '100%',
              backgroundPosition: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}
            p={[3, 4]}
          ></Card>
          <Text
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
            p={[1, 2]}
          >
            AMA with Limor Fried
          </Text>
        </Card>
        <Card
          sx={{
            backgroundSize: 'cover',
            textAlign: ['left', 'center', 'right'],
            clear: 'both',
            background: 'none',
            backgroundPosition: 'center'
          }}
          p={[0]}
        >
          <Heading sx={{ fontSize: 2 }}>
            Chatting with influential people in tech on
          </Heading>
          <Heading as="h1" sx={{ fontSize: '74px' }}>
            inspiring AMAs
          </Heading>
          <Text sx={{ fontSize: 2 }}>
            <br />
            <Grid
              columns={[null, null, null, 2]}
              gap={3}
              mt={[2, 2]}
              mb={[3, 4]}
              sx={{
                paddingLeft: ['null', null, '6%']
              }}
            >
              <Mention
                sx={{ color: 'black' }}
                name="Limor Fried"
                url="https://www.youtube.com/watch?v=IWFtj9cCaB0"
                img="https://usasciencefestival.org/wp-content/uploads/2018/01/Limor-Fried-600x600.jpg"
              />
              <Mention
                sx={{ color: 'black' }}
                name="Dylan Field"
                url="https://www.youtube.com/watch?v=fDKYjX37cbo"
                img="https://dl.airtable.com/.attachmentThumbnails/10060ecb0494cc79d6000ceb95ca07c3/cbbb4caf"
              />
              <Mention
                sx={{ color: 'black' }}
                name="Tommy DeVoss"
                url="https://www.youtube.com/watch?v=tDtBCcLJ2xU"
                img="https://dl.airtable.com/.attachmentThumbnails/c2945a6e36439be2d1f9aae336ec6181/55c890d5.png"
              />

              <Mention
                sx={{ color: 'black' }}
                name="Alex Stamos"
                url="https://www.youtube.com/watch?v=thXsjHVcxx4"
                img="https://dl.airtable.com/.attachmentThumbnails/df51be717dd8e09204ec23b27336f4a7/acff2db0"
              />
               <Mention
                sx={{ color: 'black' }}
                name="Nicky Case"
                url="https://www.youtube.com/watch?v=KKEYTSUvsS8"
                img="https://dl.airtable.com/.attachmentThumbnails/43c443b80f58f0f3dd3f81124bf2bf6e/9a1a83c4"
              />

              <Mention
                sx={{ color: 'black' }}
                name="View more"
                url="https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w"
                img="https://i.imgur.com/rXFcdi1.png"
              />
            </Grid>
          </Text>
          <br />
        </Card>
      </Grid>
    </Container>
  </Box>
)

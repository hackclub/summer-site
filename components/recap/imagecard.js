import { Box, Card, Image, Text } from 'theme-ui'
import { isEmpty } from 'lodash'
import Mention from '../mention'

export default ({ content, url, mention, aftercontent }) => (
  <Card
    as="figure"
    sx={{
      backgroundSize: 'cover',
      overflow: 'hidden',
      backgroundPosition: 'center',
      borderRadius: '20px',
      boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
      p: [0, 0],
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)'
      }
    }}
  >
    <Image
      src={url}
      loading="lazy"
      alt={[content, mention, aftercontent].filter(n => !isEmpty(n)).join(' ')}
      sx={{
        objectPosition: 'center',
        objectFit: 'cover',
        height: '400px',
        width: '100%',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
      }}
    />
    <Text
      as="figcaption"
      sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        px: 2,
        pb: [1, 2]
      }}
    >
      {content}
      {mention && <Mention username={mention} />}
      {aftercontent}
    </Text>
  </Card>
)

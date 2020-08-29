import { Box, Card, Avatar, Heading, Text } from 'theme-ui'

const Mention = ({ name, img, url }) => (
  <Box
    as="a"
    href={url}
    sx={{
      textAlign: 'center',
      color: 'black',
      ':hover,:focus': { color: 'purple' }
    }}
  >
    <Avatar width={72} height={72} src={img} alt={name} />
    <Heading as="h3" variant="subheadline">
      {name}
    </Heading>
  </Box>
)

export default Mention

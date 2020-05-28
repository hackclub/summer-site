import { Flex, Box, Badge, Text, Heading, Grid } from 'theme-ui'
import theme from '../lib/theme'
import Icon from './icon'
import styled from '@emotion/styled'

const Timeline = styled(Flex)`
  flex-direction: column;
  line-height: 1.125;
  position: relative;
  &:before {
    content: '';
    height: 100%;
    width: 3px;
    margin-left: 6px;
    position: absolute;
    z-index: 0;
    backgroundimage: linear-gradient(
      to bottom,
      ${theme.colors.blue} 0%,
      ${theme.colors.cyan} 15%,
      ${theme.colors.cyan} 85%,
      ${theme.colors.blue} 100%
    );
  }
`

const Step = ({ name, duration, icon, color = 'red' }) => (
  <Flex sx={{ alignItems: 'center' }}>
    <Box
      sx={{
        p: 2,
        borderRadius: 'circle',
        bg: color,
        color: 'white',
        lineHeight: 0,
        mr: 3
      }}
    >
      <Icon glyph={icon} size={32} />
    </Box>
    <Box>
      <Text as="span" variant="caption">
        {duration}
      </Text>
      <Heading as="h3" variant="subheadline" sx={{ mt: 1, mb: 0 }}>
        {name}
      </Heading>
    </Box>
  </Flex>
)

export default () => (
  <Grid columns={[null, 2]} gap={3}>
    <Step
      name="Application period"
      duration="Until June 5th"
      icon="send"
      color="orange"
    />
    <Step
      name="Results released"
      duration="June 10th"
      icon="announcement"
      color="yellow"
    />
    <Step name="Get making!" duration="July 6th" icon="idea" color="green" />
    <Step
      name="Awards ceremony"
      duration="August 16th"
      icon="sticker"
      color="cyan"
    />
  </Grid>
)

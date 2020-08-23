import { Flex, Text } from 'theme-ui'
import { isEmpty } from 'lodash'

const Stat = ({
  value,
  label,
  unit = '',
  color = 'text',
  center = false,
  reversed = false,
  lg = false,
  ...props
}) => (
  <Flex
    {...props}
    sx={{
      flexDirection: reversed ? 'column-reverse' : 'column',
      lineHeight: 1,
      mb: 2,
      ...props.sx
    }}
  >
    <Flex
      sx={{
        alignItems: unit === '$' ? 'start' : 'center',
        justifyContent: center ? 'center' : 'start',
        position: 'relative'
      }}
    >
      {!isEmpty(unit) && (
        <Text
          as="sup"
          sx={{
            fontSize: [2, 3, 4],
            color: color === 'text' ? 'secondary' : color,
            ml: [null, unit === '%' ? 1 : null],
            mr: [null, 1],
            pt: [null, 1]
          }}
          children={unit}
        />
      )}
      <Text
        as="span"
        sx={{
          color,
          fontSize: lg ? [5, 6, 7] : [4, 5, 6],
          fontFamily: 'Phantom Sans',
          fontWeight: 'heading',
          letterSpacing: 'title',
          my: 0
        }}
        children={value || '—'}
      />
    </Flex>
    {!isEmpty(label) && (
      <Text
        as="span"
        variant="caption"
        sx={{
          fontSize: lg ? [1, 2, 3] : [0, 1],
          letterSpacing: 'headline',
          textTransform: 'uppercase'
        }}
        children={label}
      />
    )}
  </Flex>
)

export default Stat

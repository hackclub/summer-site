import { Button } from 'theme-ui'
import theme from '../lib/theme'
import { gx } from '../lib/gradients'

const bg = {
  default: {
    bg: 'blue',
    backgroundImage: gx('cyan', 'blue')
  },
  submitting: {
    bg: 'blue',
    backgroundImage: gx('cyan', 'blue')
  },
  success: {
    bg: 'green',
    backgroundImage: gx('green', 'cyan')
  },
  error: {
    bg: 'orange',
    backgroundImage: gx('orange', 'red'),
    boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 4px ${theme.colors.primary}`
  }
}

const submitting = {
  ...bg.default,
  opacity: 0.5,
  pointerEvents: 'none',
  cursor: 'not-allowed'
}

const Submit = ({
  status,
  labels = {
    default: 'Submit',
    error: 'Error!',
    success: 'Submitted!'
  },
  width = '100%',
  sx,
  ...props
}) => (
  <Button
    as="button"
    type="submit"
    sx={{
      py: 2,
      px: 3,
      mt: 3,
      fontSize: 2,
      width,
      ...(status === 'submitting' ? submitting : bg[status]),
      ...sx
    }}
    disabled={status === 'submitting'}
    children={status === 'submitting' ? 'Submitting…' : labels[status]}
    {...props}
  />
)

export default Submit

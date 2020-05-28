import { Card, Label, Input, Checkbox, Textarea } from 'theme-ui'
import useForm from '../lib/use-form'
import Submit from './submit'

const SignupForm = () => {
  const { status, formProps, useField } = useForm('/api/join')

  return (
    <Card
      sx={{
        variant: 'cards.translucent',
        maxWidth: 'narrow',
        mx: 'auto',
        label: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          fontSize: 2,
          mb: 3
        }
      }}
    >
      <form {...formProps}>
        <Label>
          Full name
          <Input {...useField('name')} placeholder="Fiona Hackworth" required />
        </Label>
        <Label>
          Email address
          <Input
            {...useField('email')}
            placeholder="fiona@hackclub.com"
            required
          />
        </Label>
        <Label>
          What do you want to learn this summer?
          <Textarea
            {...useField('reason')}
            placeholder="Write a few sentences."
            required
          />
        </Label>
        <Submit
          status={status}
          labels={{
            default: 'Pre-register',
            error: 'Something went wrong',
            success: 'Submitted!'
          }}
        />
      </form>
    </Card>
  )
}

export default SignupForm
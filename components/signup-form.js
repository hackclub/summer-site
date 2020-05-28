import { Card, Label, Input, Textarea } from 'theme-ui'
import useForm from '../lib/use-form'
import Submit from './submit'
import PreviousResponse from './previous-response'
import * as timeago from 'timeago.js'

const SignupForm = () => {
  const { status, formProps, useField } = useForm('/api/prereg')
  return (
    <Card
      sx={{
        // variant: 'cards.translucent',
        bg: 'smoke',
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
          First & last name
          <Input {...useField('Name')} placeholder="Fiona Hackworth" required />
        </Label>
        <Label>
          Email address
          <Input
            {...useField('Email')}
            placeholder="fiona@hackclub.com"
            required
          />
        </Label>
        <Label>
          Age
          <Input
            {...useField('Age')}
            required
          />
        </Label>
        <Label>
          City, State
          <Input
            {...useField('City & State')}
            placeholder="Los Angeles, California"
            required
          />
        </Label>
        <Label>
          Country
          <Input
            {...useField('Country')}
            placeholder="USA"
            required
          />
        </Label>
        <Label>
          What is something you want to learn this summer?
          <PreviousResponse />
          <Textarea
            {...useField('What do you want to learn?')}
            placeholder="Write a sentence or two."
            required
          />
        </Label>
        <Submit
          status={status}
          labels={{
            default: 'Submit Pre-Registration',
            error: 'Something went wrong',
            success: 'Submitted!'
          }}
        />
        <p>(Summer of Making will begin {timeago.format('2020-06-18')} on June 18th. Hope to have you hacking with us soon!)</p>
      </form >
    </Card >
  )
}

export default SignupForm
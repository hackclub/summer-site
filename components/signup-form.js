import { Card, Label, Input, Textarea, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import useForm from '../lib/use-form'
import Submit from './submit'
import * as timeago from 'timeago.js'

const PreviousResponse = () => {
  const [status, setStatus] = useState('loading')
  const [reason, setReason] = useState('')
  const [timeSince, setTimeSince] = useState('')

  useEffect(() => {
    async function fetchData() {
      let options = {
        maxRecords: 1,
        sort: [{ field: 'Created at', direction: 'desc' }],
        filterByFormula: "{Approved for display} = 1"
      }
      let endpointURL = `https://api2.hackclub.com/v0.1/Pre-register/Applications?select=${JSON.stringify(options)}`
      try {
        let results = await fetch(endpointURL, { mode: 'cors' }).then(r => r.json())
        let reason = results[0].fields
        setReason(reason['What do you want to learn?'])
        setTimeSince(timeago.format(reason['Created at']))
        setStatus('success')
      } catch (e) {
        setStatus('error')
      }
    }
    fetchData()
  }, [])

  if (status == 'success') {
    return (
      <>
        <Text variant="caption">
          This was written by an applicant about {timeSince}:
        </Text>
        <Text variant="caption" color="slate">
          {reason}
        </Text>
      </>
    )
  } else {
    return null
  }
}

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
          Age
          <Input
            {...useField('gradYear')}
            required
          />
        </Label>
        <Label>
          City, State
          <Input
            {...useField('country')}
            placeholder="Los Angeles, California"
            required
          />
        </Label>
        <Label>
          Country
          <Input
            {...useField('country')}
            placeholder="USA"
            required
          />
        </Label>
        <Label>
          What is something you want to learn this summer?
          <PreviousResponse />
          <Textarea
            {...useField('learn')}
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
        <p>(Summer of Making will begin in 3 weeks on June 18th. Hope to have you hacking with us soon!)</p>
      </form >
    </Card >
  )
}

export default SignupForm

import { Card, Label, Input, Checkbox, Textarea, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import useForm from '../lib/use-form'
import Submit from './submit'
import fetch from 'isomorphic-unfetch'

const SignupForm = () => {
  const { status, formProps, useField } = useForm('/api/prereg')
  const [reason, setReason] = useState('')
  const [timeSince, setTimeSince] = useState('')
  useEffect(() => {
    async function fetchData() {
      let options = {
        maxRecords: 5,
        sort: [{field: 'Created at', direction: 'desc'}]
      }
      let endpointURL = `https://api2.hackclub.com/v0.1/Pre-register/Applications?select=${JSON.stringify(options)}`
      let latestReason = await fetch(endpointURL, {
        mode: 'cors'
      })
      let data = await latestReason.json()
      setReason(data[0].fields['What do you want to learn?'])
      setTimeSince(data[0].fields['Time since'])
    }
    fetchData()
  }, [])

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
          High School Graduation Year
          <Input
            {...useField('gradYear')}
            placeholder="2021"
            required
          />
        </Label>
        <Label>
          Country
          <Input
            {...useField('country')}
            placeholder="United States"
            required
          />
        </Label>
        <Label>
          What do you want to learn this summer? The last person who submitted: {reason}
          <Textarea
            {...useField('learn')}
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
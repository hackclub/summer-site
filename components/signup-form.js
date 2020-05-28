import { Card, Label, Input, Checkbox, Textarea, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import useForm from '../lib/use-form'
import Submit from './submit'
import fetch from 'isomorphic-unfetch'
import * as timeago from 'timeago.js'

const PreviousResponse = () => {
  const [status, setStatus] = useState('loading')
  const [reason, setReason] = useState('')
  const [timeSince, setTimeSince] = useState('')

  useEffect(() => {
    async function fetchData() {
      let options = {
        maxRecords: 1,
        sort: [{field: 'Created at', direction: 'desc'}],
        filterByFormula: "{Approved for display} = 1"
      }
      let endpointURL = `https://api2.hackclub.com/v0.1/Pre-register/Applications?select=${JSON.stringify(options)}`
      try {
        let response = await fetch(endpointURL, { mode: 'cors' })
        let results = await response.json()
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
        <p>Not sure what to put here? This was written by an applicant {timeSince}.</p>
        <pre>{reason}</pre>
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
          What do you want to learn this summer?
          <Textarea
            {...useField('learn')}
            placeholder="Write a few sentences."
            required
          />
        </Label>
        <PreviousResponse />
        <Submit
          status={status}
          labels={{
            default: 'Submit Pre-Registration',
            error: 'Something went wrong',
            success: 'Submitted!'
          }}
        />
      </form>
    </Card>
  )
}

export default SignupForm
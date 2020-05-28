import { Card, Label, Input, Textarea, Text, Grid } from 'theme-ui'
import { useState, useEffect } from 'react'
import useForm from '../lib/use-form'
import { timeSince } from '../lib/dates'
import Submit from './submit'

const PreviousResponse = () => {
  const [status, setStatus] = useState('loading')
  const [reason, setReason] = useState('')
  const [timeSince, setTimeSince] = useState('')

  useEffect(() => {
    async function fetchData() {
      let options = {
        maxRecords: 1,
        sort: [{ field: 'Created at', direction: 'desc' }],
        filterByFormula: '{Approved for display} = 1'
      }
      const url = `https://api2.hackclub.com/v0.1/Pre-register/Applications?select=${JSON.stringify(
        options
      )}`
      try {
        const results = await fetch(url, { mode: 'cors' }).then(r => r.json())
        const reason = results[0].fields
        console.log(reason)
        setReason(reason['What do you want to learn?'])
        setTimeSince(timeSince(reason['Created at'], true, true))
        setStatus('success')
      } catch (e) {
        setStatus('error')
      }
    }
    fetchData()
  }, [])

  if (status === 'success') {
    return (
      <>
        <Text variant="caption" sx={{ mt: 2, pb: 2 }}>
          This was written by an applicant about {timeSince}:
        </Text>
        <Text variant="caption" color="slate" sx={{ paddingBottom: '10px' }}>
          {reason}
        </Text>
      </>
    )
  } else {
    return null
  }
}

const full = { gridColumn: [null, 'span 2'] }

const SignupForm = () => {
  const { status, formProps, useField } = useForm('/api/prereg')
  return (
    <Card
      sx={{
        bg: 'smoke',
        maxWidth: 'narrow',
        mx: 'auto',
      }}
    >
      <Grid columns={[null, 2]} gap={3} as="form" {...formProps}>
        <Label sx={full}>
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
          <Input {...useField('Age')} placeholder={16} required />
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
          <Input {...useField('Country')} placeholder="USA" required />
        </Label>
        <Label sx={full}>
          What is something you want to learn this summer?
          <Textarea
            {...useField('What do you want to learn?')}
            placeholder="Write a sentence or two."
            required
          />
          <PreviousResponse />
        </Label>
        <Submit
          status={status}
          labels={{
            default: 'Submit Pre-Registration',
            error: 'Something went wrong',
            success: 'Submitted!'
          }}
          sx={full}
        />
        <Text sx={{ ...full, textAlign: 'center' }}>
          Summer of Making will begin in {timeSince('2020-06-18', true, true)} on June
          18th. Hope to have you hacking with us soon!
        </Text>
      </Grid>
    </Card>
  )
}

export default SignupForm

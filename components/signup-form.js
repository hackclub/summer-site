import { Card, Label, Input, Textarea, Text, Grid } from 'theme-ui'
import { useState, useEffect } from 'react'
import useForm from '../lib/use-form'
import { timeSince } from '../lib/dates'
import Submit from './submit'

const full = { gridColumn: [null, 'span 2'] }

const SignupForm = ({ reason, time }) => {
  const { status, formProps, useField } = useForm('/api/prereg')
  return (
    <Card
      sx={{
        bg: 'smoke',
        maxWidth: 'narrow',
        mx: 'auto'
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
            placeholder="New Atlantis, Neo Victoria"
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
          {reason && (
            <>
              <Text
                variant="caption"
                sx={{ textTransform: 'uppercase', fontSize: 1, mt: 3, mb: 1 }}
              >
                By an applicant {timeSince(time)}
              </Text>
              <Text
                variant="caption"
                color="slate"
                sx={{
                  fontSize: 2,
                  lineHeight: 'subheading',
                  borderLeft: '3px solid',
                  borderColor: 'cyan',
                  pl: 3
                }}
              >
                {reason}
              </Text>
            </>
          )}
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
      </Grid>
    </Card>
  )
}

export default SignupForm

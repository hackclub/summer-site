import { useState, useEffect } from 'react'
import { Text } from 'theme-ui'
import * as timeago from 'timeago.js'

const PreviousResponse = (props) => {
  // const [status, setStatus] = useState('loading')
  // const [reason, setReason] = useState('')
  // const [timeSince, setTimeSince] = useState('')

  // useEffect(() => {
  //   async function fetchData() {
  //     let options = {
  //       maxRecords: 1,
  //       sort: [{ field: 'Created at', direction: 'desc' }],
  //       filterByFormula: "{Approved for display} = 1"
  //     }
  //     let endpointURL = `https://api2.hackclub.com/v0.1/Pre-register/Applications?select=${JSON.stringify(options)}`
  //     try {
  //       let results = await fetch(endpointURL, { mode: 'cors' }).then(r => r.json())
  //       let reason = results[0].fields
  //       setReason(reason['What do you want to learn?'])
  //       setTimeSince(timeago.format(reason['Created at']))
  //       setStatus('success')
  //     } catch (e) {
  //       setStatus('error')
  //     }
  //   }
  //   fetchData()
  // }, [])

  return JSON.stringify(props)
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

export const getStaticProps = async () => {
  const props = {}

  let options = {
    maxRecords: 1,
    sort: [{ field: 'Created at', direction: 'desc' }],
    filterByFormula: "{Approved for display} = 1"
  }
  let endpointURL = `https://api2.hackclub.com/v0.1/Pre-register/Applications?select=${JSON.stringify(options)}`

  props.cake = true
  try {
    let results = await fetch(endpointURL, { mode: 'cors' }).then(r => r.json())
    let reason = results[0].fields
    props.reason = reason['What do you want to learn?']
    props.timeSince = timeago.format(reason['Created at'])
    props.status = 'success'
  } catch (e) {
    props.status = 'error'
  }
  return { props }
}

export default PreviousResponse
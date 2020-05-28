import AirtablePlus from 'airtable-plus'
import { pick } from 'lodash'

let preregBase = new AirtablePlus({
  token: process.env.AIRTABLE_API_KEY,
  baseID: 'appEdSUXVveyjxVp5',
  tableName: 'Applications'
})

export default (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' })
  }
  
  let data = JSON.parse(req?.body || '{}')
  let whitelistedData = pick(data, [
    'Name',
    'Email',
    'What do you want to learn?',
    'Age',
    'Country',
    'City & State'
  ])
  preregBase.create(whitelistedData)
  res.json({ status: 'success' })
}
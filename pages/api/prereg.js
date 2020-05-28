import AirtablePlus from 'airtable-plus'

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
  preregBase.create({
    'Full Name': data.name,
    'Email': data.email,
    'Want to learn': data.learn,
    'High School Graduation Year': data.gradYear,
    'Home Country (Currently Residing)': data.country
  })
  res.json({ status: 'success' })
}
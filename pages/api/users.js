import dbConnect from '../../lib/dbConnect'
import User from '../../backend/models/User.mjs'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        
        const users = await User.find({})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        console.log('Error: ', error)
        res.status(400).json({ success: false, error: error })
      }
      break
    case 'POST':
      try {
        const user = await User.create(req.body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
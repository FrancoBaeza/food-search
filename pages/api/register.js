import dbConnect from '../../lib/dbConnect'
import { registerUser } from '../../backend/controllers/Auth.mjs'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        console.log('Error: ', error)
        res.status(400).json({ success: false, error: error })
      }
      break
    case 'POST':
      try {
        return await registerUser(req, res)
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
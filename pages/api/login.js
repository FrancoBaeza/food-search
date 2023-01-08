import { withIronSessionApiRoute } from "iron-session/next";

import dbConnect from '../../lib/dbConnect'
import { loginUser } from '../../backend/controllers/Auth.mjs'
import { ironOptions } from '../../lib/config'


const loginHandler = async (req, res) => {

    console.log('Login hanfder called')
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
        try {
            res.status(200).json({ success: true, })
        } catch (error) {
            res.status(400).json({ success: false, error: error })
        }
        break
        case 'POST':
            return await loginUser(req, res)

            try {
                console.log('A')
            } catch (error) {

                res.status(400).json({ success: false, error })
            }
            break;

        default:
        res.status(400).json({ success: false })
        break
    }
}

export default withIronSessionApiRoute(loginHandler, ironOptions)

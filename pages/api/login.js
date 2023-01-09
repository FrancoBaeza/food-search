import dbConnect from '../../lib/dbConnect'
import { loginUser } from '../../backend/controllers/Auth.mjs'
import { withSessionRoute } from "../../lib/withSession";


const loginHandler = async (req, res) => {

    console.log('Login handler called')
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

            try {
                return await loginUser(req, res)
            } catch (error) {

                res.status(400).json({ success: false, error })
            }
            break;

        default:
        res.status(400).json({ success: false })
        break
    }
}

export default withSessionRoute(loginHandler)

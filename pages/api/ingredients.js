import dbConnect from '../../lib/dbConnect'
import { createIngredient } from '../../backend/controllers/Ingredient';
import { withSessionRoute } from "../../lib/withSession";


const ingredientHandler = async (req, res) => {

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
                return await createIngredient(req, res)
            } catch (error) {
                res.status(400).json({ success: false, error })
            }
            break;

        default:
        res.status(400).json({ success: false })
        break
    }
}

export default withSessionRoute(ingredientHandler)

import mongoose from 'mongoose'

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
});

/////////////////////////// EXPORT

export default mongoose.models.Ingredient || mongoose.model('Ingredient', IngredientSchema);
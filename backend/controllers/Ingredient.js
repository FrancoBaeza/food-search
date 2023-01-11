import Ingredient from "../models/Ingredient";
import { createOne } from "../util/handlerFactory";

export const createIngredient = createOne(Ingredient);
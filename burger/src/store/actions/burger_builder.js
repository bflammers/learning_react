
import * as burgerActionTypes from '../action_types/burger_builder'

export const addIngredient = ingr => {
    return {
        type: burgerActionTypes.ADD_INGREDIENT, 
        ingredient: ingr
    }
}

export const delIngredient = ingr => {
    return {
        type: burgerActionTypes.DEL_INGREDIENT, 
        ingredient: ingr
    }
}


import * as burgerActionTypes from '../action_types/burger_builder'
import { calcPrice } from '../../utils/ingredients'

const initialState = {
    ingredients: {
        salad: 0, 
        bacon: 0, 
        cheese: 0, 
        meat: 0,
    }, 
    price: 0
}

const reducer = (state = initialState, action) => {

    let newIngredients = {...state.ingredients}

    switch (action.type) {
        case burgerActionTypes.ADD_INGREDIENT:
            newIngredients = {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] + 1
            }
            break
        case burgerActionTypes.DEL_INGREDIENT:
            newIngredients = {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] - 1
            }
            break
    }
    
    return {
        ingredients: newIngredients,
        price: calcPrice(newIngredients)
    }
}

export default reducer
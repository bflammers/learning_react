
export const calcPrice = (ingredients) => {

    const INGREDIENT_PRICES = {
        salad: 0.5, 
        bacon: 1, 
        meat: 2, 
        cheese: 1
    }

    return Object.keys(ingredients).reduce((p, c) => {
        return p + ingredients[c] * INGREDIENT_PRICES[c]
    }, 0)
}
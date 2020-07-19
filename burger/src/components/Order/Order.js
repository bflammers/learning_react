import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {

    const ingredientTypes = ['salad', 'meat', 'bacon', 'cheese']
    let ingredients = ''

    ingredientTypes.forEach(ingr => {
        if (props.details && props.details[ingr] > 0) {
            ingredients += ingr + ' (' + props.details[ingr] + ') '
        }
    })
    
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>{props.details ? props.details.price : null}</strong></p>
        </div>
    )
}

export default Order

import React from 'react';

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

    let ingredientObjects = [];
    
    Object.keys(props.ingredients).map(ig => {
        for (let i = 0; i < props.ingredients[ig]; i++) {
            ingredientObjects.push(<BurgerIngredient key={ig + i} type={ig}/>)
        }
        return null
    })

    if (ingredientObjects.length === 0) {
        ingredientObjects = "Please select ingredients"
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredientObjects}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default Burger

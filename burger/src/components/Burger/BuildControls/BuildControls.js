import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(x => (
                    <BuildControl 
                        key={x.label} 
                        label={x.label}
                        add={() => props.addIngredient(x.type)}
                        remove={() => props.removeIngredient(x.type)}
                        disabled={props.disabled[x.type]}/>
                ))
            }
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchase}>ORDER NOW</button>
        </div>
    )
}


export default BuildControls
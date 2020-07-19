import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

    const ingredientsSummary = Object.entries(props.ingredients)
        .map(([key, val]) => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {val}
                </li>
            )
    })

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: </strong>{props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button
                buttonType='Danger'
                clicked={props.cancel}>CANCEL</Button>
            <Button
                buttonType='Success'
                clicked={props.continue}>CONTINUE</Button>
        </React.Fragment>
    )
}

export default OrderSummary
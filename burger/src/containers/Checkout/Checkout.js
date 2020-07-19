import React, { useState, useEffect } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { calcPrice } from '../BurgerBuilder/BurgerBuilder'
import { Route } from 'react-router-dom'

const Checkout = (props) => {

    const [Ingredients, setIngredients] = useState({})
    const [Price, setPrice] = useState(null)

    useEffect(() => {
        const query = new URLSearchParams(props.location.search)
        console.log(query)
        const newIngredients = {}
        for (let param of query.entries()) {
            newIngredients[param[0]] = +param[1]
        }
        setIngredients(newIngredients)
        setPrice(calcPrice(newIngredients))
    }, [])

    const checkoutCancelHandler = () => {
        props.history.goBack()
    }

    const checkoutContinueHandler = () => {
        props.history.replace('/checkout/contact')
    }

    return (
        <div>
            <CheckoutSummary
                ingredients={Ingredients}
                clickedCancel={checkoutCancelHandler}
                clickedContinue={checkoutContinueHandler}/>
            <Route 
                path={props.match.path + '/contact'} 
                render={() => (<ContactData ingredients={Ingredients} price={Price}/>)}/>
        </div>
    )
}

export default Checkout
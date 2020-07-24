import React, { useState, useEffect } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { calcPrice } from '../../utils/ingredients'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

const Checkout = (props) => {

    // useEffect(() => {
    //     const query = new URLSearchParams(props.location.search)
    //     console.log(query)
    //     const newIngredients = {}
    //     for (let param of query.entries()) {
    //         newIngredients[param[0]] = +param[1]
    //     }
    //     setIngredients(newIngredients)
    //     setPrice(calcPrice(newIngredients))
    // }, [])

    const checkoutCancelHandler = () => {
        props.history.goBack()
    }

    const checkoutContinueHandler = () => {
        props.history.replace('/checkout/contact')
    }

    return (
        <div>
            <CheckoutSummary
                ingredients={props.ingredients}
                clickedCancel={checkoutCancelHandler}
                clickedContinue={checkoutContinueHandler}/>
            <Route 
                path={props.match.path + '/contact'}
                component={ContactData}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.price
    }
}
export default connect(mapStateToProps)(Checkout)
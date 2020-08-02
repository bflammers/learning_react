import React, { useState, useEffect, useMemo } from 'react'
import axios from '../../axios-db'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import { connect } from 'react-redux'
import { addIngredient, delIngredient } from '../../store/actions/burger_builder'
import { login, testConnection } from '../../store/actions/auth' 

const BurgerBuilder = (props) => {

    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [submittingOrder, setSubmittingOrder] = useState(false)

    useEffect(() => {
        const allCounts = Object.values(props.ingredients)
        const nIngredients = allCounts.reduce((a, b) => a + b, 0)
        setPurchasable(nIngredients > 0)
    }, [props.ingredients])

    const disabledInfo = {...props.ingredients}
    for (const key in props.ingredients) {
        disabledInfo[key] = props.ingredients[key] <= 0
    }

    const purchaseHandler = () => {
        setPurchasing(true)
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }

    const purchaseContinueHandler = () => {

        setSubmittingOrder(true)
        
        const queryParams = []
        for (let i in props.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.ingredients[i]))
        }
        props.history.push({
            pathname: '/checkout', 
            search: '?' + queryParams.join('&')
        })
    }

    const memoOrderSummary = useMemo(() => {
        
        let orderSummary = <OrderSummary 
            ingredients={props.ingredients}
            price={props.price}
            cancel={purchaseCancelHandler}
            continue={purchaseContinueHandler}/>
        
        if (submittingOrder) {
            orderSummary = (
                <div style={{textAlign: 'center'}}>
                    <CircularProgress color="secondary" />
                </div>
            )
        } 

        return (
            <Modal 
                show={purchasing}
                backdropClicked={purchaseCancelHandler}>
                    {orderSummary}
            </Modal>
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [purchasing, submittingOrder])
    
    return (
        <React.Fragment>
            {memoOrderSummary}
            <Burger ingredients={props.ingredients}/>
            <BuildControls 
                ingredients={props.ingredients} 
                addIngredient={props.addIngredient}
                removeIngredient={props.delIngredient}
                disabled={disabledInfo}
                price={props.price}
                purchasable={purchasable}
                purchase={purchaseHandler}/>
            <div style={{textAlign: 'center', marginTop: '10px'}}>
                <Button variant="contained" color="secondary" onClick={props.login}>Login</Button>
                <Button variant="contained" color="primary" onClick={testConnection}>Test connection</Button>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.price
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch( login('bartlammers', 'bartlammers') ),
        addIngredient: (ingr) => dispatch( addIngredient(ingr) ),
        delIngredient: (ingr) => dispatch( delIngredient(ingr) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))

import React, { useState, useCallback, useMemo } from 'react'
import axios, {login} from '../../axios-db'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'


const calcPrice = (ingredients) => {

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

const BurgerBuilder = (props) => {

    const [ingredients, setIngredients] = useState({
        salad: 0, 
        bacon: 0, 
        cheese: 0, 
        meat: 0,
    })

    const [price, setPrice] = useState(0)
    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [submittingOrder, setSubmittingOrder] = useState(false)

    const handleLessIngredient = (type) => {
        const newIngredients = {...ingredients}
        newIngredients[type] = Math.max(0, ingredients[type] - 1)
        setIngredients(newIngredients)
        updatePrice(newIngredients)
        updatePurchasable(newIngredients)
    }

    const handleMoreIngredient = (type) => {
        const newIngredients = {...ingredients}
        newIngredients[type] = ingredients[type] + 1
        setIngredients(newIngredients)
        updatePrice(newIngredients)
        updatePurchasable(newIngredients)
    }

    const updatePrice = (ingredients) => {
        const newPrice = calcPrice(ingredients)
        setPrice(newPrice)
    }

    const updatePurchasable = (ingredients) => {
        const allCounts = Object.values(ingredients)
        const nIngredients = allCounts.reduce((a, b) => a + b, 0)
        setPurchasable(nIngredients > 0)
    }

    const disabledInfo = {...ingredients}
    for (const key in ingredients) {
        disabledInfo[key] = ingredients[key] <= 0
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
        for (let i in ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]))
        }
        props.history.push({
            pathname: '/checkout', 
            search: '?' + queryParams.join('&')
        })
    }

    const memoOrderSummary = useMemo(() => {
        
        let orderSummary = <OrderSummary 
            ingredients={ingredients}
            price={price}
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
            <Burger ingredients={ingredients}/>
            <BuildControls 
                ingredients={ingredients} 
                addIngredient={handleMoreIngredient}
                removeIngredient={handleLessIngredient}
                disabled={disabledInfo}
                price={price}
                purchasable={purchasable}
                purchase={purchaseHandler}/>
            <div style={{textAlign: 'center', marginTop: '10px'}}>
                <Button variant="contained" color="secondary" onClick={login}>Login</Button>
            </div>
        </React.Fragment>
    )
}

export { calcPrice }
export default withErrorHandler(BurgerBuilder, axios)

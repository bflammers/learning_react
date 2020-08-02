
import axios from '../../axios-db'

import * as ordersActionTypes from '../action_types/orders'


const getOrdersStart = () => {
    return {
        type: ordersActionTypes.GET_ORDERS_START
    }
}

const getOrdersSuccess = (orders) => {
    return {
        type: ordersActionTypes.GET_ORDERS_SUCCESS,
        orders: orders
    }
}

const getOrdersFail = (error) => {
    console.log('[actions/orders.js] Get orders failed', error)
    return {
        type: ordersActionTypes.GET_ORDERS_FAIL,
        error: error
    }
}

export const getOrders = () => {
    return dispatch => {
        dispatch(getOrdersStart())
        setTimeout(() => {
            axios.get('/clients/2/get_orders/')
                .then(response => {
                    dispatch(getOrdersSuccess(response.data['orders']))
                })
                .catch(error => {
                    dispatch(getOrdersFail(error))
                })
        }, 0)
    }
}

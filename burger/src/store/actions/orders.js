
import axios from '../../axios-db'

import * as ordersActionTypes from '../action_types/orders' 
import store from '../store'

export const storeOrders = orders => {
    return {
        type: ordersActionTypes.STORE_ORDERS,
        orders: orders
    }
}

export const getOrders = () => {

    // let config = {
    //     headers: {
    //         Authorization: 'Token ' + props.token
    //     }
    // }

    return dispatch => {
        axios.get('/clients/2/get_orders/')
            .then(response => {
                dispatch(storeOrders(response.data['orders']))
            })
        }
}

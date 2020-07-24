
import * as ordersActionTypes from '../action_types/orders'

const initialState = {
    orders: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ordersActionTypes.STORE_ORDERS:
            return {
                orders: action.orders
            }
    }
    return state
}

export default reducer

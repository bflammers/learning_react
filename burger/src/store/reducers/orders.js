
import * as ordersActionTypes from '../action_types/orders'

const initialState = {
    loading: false,
    loadingError: null,
    orders: []
}

const getOrdersStart = (state, action) => {
    return {
        ...state,
        loading: true,
        loadingError: null
    }
}

const getOrdersSuccess = (state, action) => {
    return {
        orders: action.orders,
        loading: false, 
        loadingError: null
    }
}

const getOrdersFail = (state, action) => {
    return {
        ...state,
        loading: false, 
        loadingError: action.error
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ordersActionTypes.GET_ORDERS_START: return getOrdersStart(state, action)
        case ordersActionTypes.GET_ORDERS_SUCCESS: return getOrdersSuccess(state, action)
        case ordersActionTypes.GET_ORDERS_FAIL: return getOrdersFail(state, action)
        default: return state
    }
}

export default reducer

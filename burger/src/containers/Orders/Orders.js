import React, { useState, useEffect } from 'react'
import Order from '../../components/Order/Order'
import CircularProgress from '@material-ui/core/CircularProgress';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-db'
import { connect } from 'react-redux'
import { getOrders } from '../../store/actions/index'

const Orders = (props) => {

    useEffect(() => {
        props.getOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.auth])

    let orderList = props.orders.map(order => (
        <Order key={order.order_id} details={order} />
    ))

    if (props.loading) {
        orderList = (
            <div style={{ margin: '200px auto', textAlign: 'center' }}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div style={{ width: '70%', margin: '0 auto' }}>
            {orderList}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth.token !== null,
        orders: state.orders.orders,
        loading: state.orders.loading,
        loadingError: state.orders.loadingError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))
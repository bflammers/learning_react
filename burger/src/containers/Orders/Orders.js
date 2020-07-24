import React, { useState, useEffect } from 'react'
import Order from '../../components/Order/Order'
import CircularProgress from '@material-ui/core/CircularProgress'; 
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-db'
import { connect } from 'react-redux'
import { getOrders } from '../../store/actions/index'

const Orders = (props) => {

    const [loading, setLoading] = useState(true)    

    useEffect(() => {
        props.getOrders()
        if (props.auth) {
            setLoading(false)
        }
    }, [props.auth])

    let orderList = props.orders.map(order => (
        <Order key={order.order_id} details={order}/>
    ))

    if ( loading ) {
        orderList = <CircularProgress/>
    }
    
    return (
        <div style={{width: '20px', margin: '200px auto'}}>
            {orderList}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth.authenticated,
        orders: state.orders.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))
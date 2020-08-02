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
        orderList = (
            <div style={{margin: '200px auto', textAlign: 'center'}}>
                <CircularProgress/>
            </div>
        )
    }
    
    return (
        <div style={{width: '70%', margin: '0 auto'}}>
            {orderList}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth.token !== null,
        orders: state.orders.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))
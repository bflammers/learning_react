import React, { useState, useEffect } from 'react'
import Order from '../../components/Order/Order'
import CircularProgress from '@material-ui/core/CircularProgress'; 
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-db'

const Orders = (props) => {

    const [MyOrders, setMyOrders] = useState([])
    const [loading, setLoading] = useState(true)    

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/db/clients/2/get_orders/')
            .then(response => {
                setMyOrders(response.data['orders'])
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }, [])

    let orderList = MyOrders.map(order => (
        <Order key={order.order_id} details={order}/>
    ))

    if ( loading ) {
        orderList = <CircularProgress/>
    }
    
    return (
        <div>
            {orderList}
        </div>
    )
}

export default withErrorHandler(Orders, axios)
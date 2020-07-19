import React, { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom'
import axios from '../../../axios-db'
import Input from '../../../components/UI/Input/Input'


const fieldConfig = (type, config_type, placeholder, value) => (
    {
        elementType: type, 
        elementConfig: {
            type: config_type, 
            placeholder: placeholder
        }, 
        value: value
    }
)


const ContactData = (props) => {

    const [Data, setData] = useState({
        name: '', 
        email: '', 
        street_address: '', 
        postal_code: ''
    })

    const [SubmittingOrder, setSubmittingOrder] = useState(false)

    const orderForm = {
        name: fieldConfig('input', 'text', 'Your name', Data['name']),
        email: fieldConfig('input', 'email', 'Your email', Data['email']),
        street_address: fieldConfig('input', 'text', 'Your address', Data['street_address']),
        postal_code: fieldConfig('input', 'text', 'Your postal code', Data['postal_code']),
    }

    const orderHandler = (event) => {
        event.preventDefault()
        setSubmittingOrder(true)

        const order = {
            ...props.ingredients, 
            price: props.price, 
            contact: Data
        }

        axios.post('orders/place_order/', order)
            .then(response => {
                setSubmittingOrder(false)
                props.history.push('/')
            })
            .catch(error => {
               alert('Something went wrong \n\n' + error.message)
               setSubmittingOrder(false)
            })
    }

    const changedHandler = (event, key) => {
        const newData = {...Data}
        newData[key] = event.target.value
        setData(newData)
    }
    
    let form = (
        <form onSubmit={orderHandler}>
            {Object.entries(orderForm).map(([key, value]) => (
                <Input 
                    key={key} 
                    inputtype={value.elementType} 
                    type={value.elementConfig.type} 
                    name={key} 
                    placeholder={value.elementConfig.placeholder}
                    onChange={(event) => changedHandler(event, key)}/>
            ))}
            <Button buttonType="Success">ORDER</Button>
        </form>
    )

    if (SubmittingOrder) {
        form = <CircularProgress/>
    }

    return (
        <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
        </div>
    )

}

export default withRouter(ContactData)
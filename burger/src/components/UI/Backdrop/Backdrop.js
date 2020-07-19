import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = (props) => {

    const bd = (
        <div 
            className={classes.Backdrop} 
            onClick={props.clicked}/>
    )

    return (
        props.show ? bd : null
    )
    
}

export default Backdrop
import React from 'react'
import classes from './NavigationItems.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
)

const NavigationItems = (props) => {

    let authComponent = <NavigationItem link='/login'>Login</NavigationItem>

    if ( props.auth ) {
        authComponent = <NavigationItem link='/logout'>Logout</NavigationItem>
    }
    
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' exact>Burger Builder</NavigationItem>
            <NavigationItem link='/orders'>Orders</NavigationItem>
            {authComponent}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(NavigationItems)


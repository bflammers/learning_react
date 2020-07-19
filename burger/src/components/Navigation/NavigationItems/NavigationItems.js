import React from 'react'
import classes from './NavigationItems.module.css'
import { NavLink } from 'react-router-dom'

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
)

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
)

export default NavigationItems
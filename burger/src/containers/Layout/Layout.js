import React, { useState } from "react";
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const showSideDrawerHandler = () => setShowSideDrawer(true)

    const hideSideDrawerHandler = () => setShowSideDrawer(false)

    return (
    <React.Fragment>
        <Toolbar
            showSideDrawer={showSideDrawerHandler}/>
        <SideDrawer 
            show={showSideDrawer}
            showHandler={showSideDrawerHandler}
            hideHandler={hideSideDrawerHandler}/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </React.Fragment>
    )
}

export default Layout
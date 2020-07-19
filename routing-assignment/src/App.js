import React from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

import classes from './App.module.css'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.App}>

        <header>
          <nav>
            <ul>
              <li>
                <NavLink 
                  activeClassName={classes.active}
                  exact
                  to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink 
                  activeClassName={classes.active}
                  exact
                  to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/courses" component={Courses}/>
          <Route path="/users" component={Users}/>
          <Redirect from="/all-courses" to="/courses"/>
          <Route render={() => <h1>404 - Not Found</h1>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

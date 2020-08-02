import React from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Login from './containers/Auth/Login'
import Logout from './containers/Auth/Logout'

import { Route } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
    </Layout>
  );
}

export default App;

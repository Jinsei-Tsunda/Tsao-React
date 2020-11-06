import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Cart from './pages/Cart'
import PaymentInfo from './pages/PaymentInfo'
import OrderCheck from './pages/OrderCheck'
import OrderDone from './pages/OrderDone'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/payment-info">
          <PaymentInfo />
        </Route>
        <Route path="/order-check">
          <OrderCheck />
        </Route>
        <Route path="/order-done">
          <OrderDone />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'
import PaymentInfo from './pages/PaymentInfo'
import OrderCheck from './pages/OrderCheck'
import OrderDone from './pages/OrderDone'

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/"></Route>
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
      </ScrollToTop>
    </Router>
  )
}

export default App

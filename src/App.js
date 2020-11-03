import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Cart from './pages/Cart'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App

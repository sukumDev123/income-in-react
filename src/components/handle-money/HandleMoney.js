import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddTransections from './add-transections/AddTransections'
import NavBar from '../navbar/NavBar'

function HandleMoney() {
  return (
    <Router>
      <div className="container-fluid">
        <NavBar />
        <Switch>
          <Route
            path="/save-money/add-transition"
            component={AddTransections}
          />
        </Switch>
      </div>
    </Router>
  )
}

/* <Route
              path="/save-money/add-transection"
              component={AddTransections}
            /> */

export default HandleMoney

import React from 'react'
// import NavBar from './components/navbar/NavBar'
import './App.css'
import Auth from './components/auth/Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HandleMoney from './components/handle-money/HandleMoney'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/save-money" component={HandleMoney} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Auth from './components/auth/Auth'
function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <Auth />
      </div>
    </div>
  )
}

export default App

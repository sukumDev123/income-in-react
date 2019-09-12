import React from 'react'
import SignIn from './signin/SignIn'
import SignUp from './signout/SignUp'
import './Auth.css'
function Auth() {
  return (
    <div className="container">
      <div className="auth-box">
        <h2> Authentication </h2>

        <div className="auth">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default Auth

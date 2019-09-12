import React from 'react'
import SignIn from './signin/SignIn'
import SignUp from './signout/SignUp'
import './Auth.css'
function Auth() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Auth

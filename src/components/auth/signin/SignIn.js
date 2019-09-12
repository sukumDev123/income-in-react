import React, { useState } from 'react'
import Boxs from '../../boxs/Boxs'
import MainInput from '../../input/MainInput'
import Button from '../button/Button'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const whenUserInputEmail = e => {
    const emailVal = e.target.value
    setEmail(emailVal)
  }
  const whenUserInputPassword = e => {
    const passwordVal = e.target.value
    setPassword(passwordVal)
  }
  const whenUserSingIn = e => {
    e.preventDefault()
  }
  return (
    <Boxs text={'SignIn'}>
      <MainInput
        value={email}
        placeholder={'email'}
        onChange={whenUserInputEmail}
        type={'text'}
      ></MainInput>
      <MainInput
        value={password}
        placeholder={'password'}
        onChange={whenUserInputPassword}
        type={'password'}
      ></MainInput>
      <Button onClick={whenUserSingIn} text={'Sign In'}></Button>
    </Boxs>
  )
}

export default SignIn

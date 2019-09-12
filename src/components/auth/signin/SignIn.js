import React, { useState } from 'react'
import Boxs from '../../boxs/Boxs'
import MainInput from '../../input/MainInput'
import Button from '../../button/Button'
import AuthPresenter from '../../../presenters/AuthPresenter'

function SignIn() {
  const authPresenter = new AuthPresenter()
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
  const handleNextWhenUserSignIn = () => {
    //TODO handle when user wanto signin
  }

  const whenUserSingIn = e => {
    e.preventDefault()
    const checkInputFillIsnotEmpty = authPresenter.checkValueMustNotEmpty([
      email,
      password
    ])
    if (checkInputFillIsnotEmpty) {
      handleNextWhenUserSignIn()
    } else {
      console.log('signIn empty')
    }
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
      <Button
        className={'btn-primary'}
        onClick={whenUserSingIn}
        text={'Sign In'}
      ></Button>
    </Boxs>
  )
}

export default SignIn

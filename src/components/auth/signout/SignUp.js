import React, { useState } from 'react'
import Button from '../../button/Button'
import MainInput from '../../input/MainInput'
import Boxs from '../../boxs/Boxs'
import AuthPresenter from '../../../presenters/AuthPresenter'

function SignUp() {
  const authPresenter = new AuthPresenter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const whenUserInputEmail = e => {
    const emailVal = e.target.value
    setEmail(emailVal)
  }
  const whenUserInputPassword = e => {
    const passwordVal = e.target.value
    setPassword(passwordVal)
  }
  const whenUserInputPasswordAgain = e => {
    const passwordValAgain = e.target.value
    setPasswordAgain(passwordValAgain)
  }

  const doWhenValueisNotEmptyWord = () => {
    const checkPasswordAndPasswordAgainIsEqual = password === passwordAgain
    if (checkPasswordAndPasswordAgainIsEqual === true) {
      console.log('Sign up success.')
      //TODO when user want to create new user.
    } else {
      console.log('Sign up not success.')
    }
  }

  const whenUserSignUp = e => {
    e.preventDefault()
    const checkValueMustNotEmpty = authPresenter.checkValueMustNotEmpty([
      [email, password, passwordAgain]
    ])

    if (checkValueMustNotEmpty) {
      doWhenValueisNotEmptyWord()
    } else {
      console.log('data is empty')
    }
  }
  return (
    <Boxs text={'Sign Up'}>
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
      <MainInput
        value={passwordAgain}
        placeholder={'password again'}
        onChange={whenUserInputPasswordAgain}
        type={'password'}
      ></MainInput>
      <Button
        className={'btn-primary'}
        onClick={whenUserSignUp}
        text={'Sign Up'}
      ></Button>
    </Boxs>
  )
}

export default SignUp

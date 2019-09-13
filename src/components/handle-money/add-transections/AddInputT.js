import React, { useState } from 'react'
import Boxs from '../../boxs/Boxs'
import MainInput from '../../input/MainInput'
import Selecter from '../../selecter/Selecter'
import Button from '../../button/Button'

function AddInputT({ setToList }) {
  const option_data = ['income', 'outcome']
  // type
  const [seleted_type, setSeletedType] = useState(option_data[0])
  // money
  const [money, setMoney] = useState('')

  const whenUserAddMoney = e => {
    const moneyV = e.target.value
    setMoney(moneyV)
  }
  // date
  //   const [date_, setDate] = useState('')

  // notes
  //   const [note, setNote] = useState('')

  const whenUserSeletedType = e => {
    const typeOfData = e.target.value
    setSeletedType(typeOfData)
  }
  const whenAddNewTransection = e => {
    e.preventDefault()
    const addNewData = { type: seleted_type, money: money, notes: 'asdasdasd' }
    setToList(prevData => [...prevData, addNewData])
  }
  return (
    <div>
      <Boxs text={'Add Transections'}>
        <MainInput
          placeholder="Money"
          value={money}
          onChange={whenUserAddMoney}
          type={'text'}
        ></MainInput>
        {/* <MainInput placeholder="Date" type={'date'}></MainInput> */}
        <Selecter
          title={'SELETE TYPE'}
          onChange={whenUserSeletedType}
          option_data={option_data}
          value={seleted_type}
        ></Selecter>
        {/* <textarea row="3" column="3"></textarea> */}
        <div className="btn50-50">
          <Button
            className={'btn-primary'}
            text={'Add New'}
            onClick={whenAddNewTransection}
          ></Button>

          <Button
            className={'btn-red'}
            text={'Clean'}
            onClick={whenAddNewTransection}
          ></Button>
        </div>
      </Boxs>
    </div>
  )
}

export default AddInputT

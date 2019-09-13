import React from 'react'
import { money_format } from '../presenters/money_format'

function MoneyForMat({ money }) {
  const moneyformat = money_format(parseFloat(money))
  return <h3>{moneyformat}</h3>
}

export default MoneyForMat

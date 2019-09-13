import React from 'react'
import Boxs from '../../boxs/Boxs'
import './AddTransection.css'
import MoneyForMat from '../../MoneyForMat'

function ListOfEachData({ notes, type, money }) {
  return (
    <div className="list-div">
      <p>{notes}</p>
      <div className="type-money">
        <h3>{type}</h3>
        <MoneyForMat money={money}></MoneyForMat>
      </div>
    </div>
  )
}
function ListInputT({ listT }) {
  return (
    <div>
      <Boxs text={'List are inputed'}>
        <div className="block_list">
          {listT.map((d, i) => {
            return (
              <ListOfEachData
                notes={d.notes}
                type={d.type}
                money={d.money}
              ></ListOfEachData>
            )
          })}
        </div>
      </Boxs>
    </div>
  )
}
export default ListInputT

import React, { useState } from 'react'
import './AddTransection.css'
import AddInputT from './AddInputT'
import ListInputT from './ListInpued'

function AddTransections() {
  const [listT, setToList] = useState([])
  return (
    <div>
      <h1 className="addText">Add Transection</h1>
      <div className="box-add-ts">
        <ListInputT listT={listT}></ListInputT>
        <AddInputT setToList={setToList}></AddInputT>
      </div>
    </div>
  )
}

export default AddTransections

import React from 'react'
import './Boxs.css'
function Boxs(props) {
  return (
    <div className="box-all-input-format">
      <h1 className="title-box">{props.text}</h1>
      {props.children}
    </div>
  )
}

export default Boxs

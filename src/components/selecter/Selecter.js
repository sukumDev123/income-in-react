import React from 'react'
import './Selecter.css'
/**
 *
 * @param {*} param0  is want {value , option_data} value is string , option_data is array string
 */
function Selecter({ value, option_data, onChange, title }) {
  return (
    <div className="selected-div">
      <label className="title-box">{`${title}:`}</label>
      <select className="selected-this" onChange={onChange} value={value}>
        {option_data.map((option, ind) => {
          return (
            <option val={option} key={ind}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Selecter

import React from 'react'
import './Maininput.css'
function MainInput({ placeholder, value, onChange, type }) {
  return (
    <div className="input-box">
      <label>{placeholder.toUpperCase()} :</label>
      <input
        className="input-style"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  )
}

export default MainInput

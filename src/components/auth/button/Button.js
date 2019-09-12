import React from 'react'
import './Button.css'
function Button({ onClick, text }) {
  return (
    <div className="buttonBox">
      <button className="button-style" onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button

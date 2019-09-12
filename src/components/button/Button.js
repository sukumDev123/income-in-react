import React from 'react'
import './Button.css'
function Button({ onClick, text, className }) {
  return (
    <div className="buttonBox">
      <button className={`${className} button-style`} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button

import React from 'react'
import './Button.css'
const Button = ({label,onClick}) => {
  return (
    <div className='btn-container'>
        <button onClick={onClick} className='btn' > {label}</button>
    </div>
  )
}

export default Button
import React from 'react'
import './Input.css'

const Input = ({ type, placeholder, value, onChange ,name }) => {
    return (<div className='input-container'>
        <input  type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className='input-box'  autocomplete="on"/>
    </div>
    )
}

export default Input
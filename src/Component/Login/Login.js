import React, { useState } from 'react'
import Button from '../uicomponent/Button/Button';
import Input from '../uicomponent/Input/Input'
import './Login.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const [userState, setuserState] = useState("");
  const [passwordState, setpasswordState] = useState("")
  const [error, seterror] = useState("")

  const handleInput = (event) => {
    const { name, value } = event.target;
    name == "userState" ? setuserState(value) : setpasswordState(value);


  }
  const handleSubmit = () => {
    // console.log(userState, passwordState)

  setuserState("");
    setpasswordState("");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userState,
        password: passwordState,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.message){
          seterror(data.message)
        }
        else{
          seterror("")
          localStorage.setItem('id',data.id);
          localStorage.setItem("token",data.token);
          navigate('/profile')

        }
        // console.log(data)
       

      })
    
  }

  return (
    <div className='login-container'>
      <div className='login-body'>
        <h3>Login</h3>
        <Input type='text' name='userState' placeholder="Email" value={userState} onChange={handleInput} />
        <Input type='password' name='passwordState' placeholder="Password" value={passwordState} onChange={handleInput} />
        <Button label='Login' onClick={handleSubmit} />
        <div className='error-container'>
        {error&&<div className='error'>{error} </div>}
        </div>
      </div>
      
    </div>
  )
}

export default Login
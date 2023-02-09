import React, { useState, useEffect } from 'react'
import './Profile.css'

const Profile = () => {

  const [userData, setuserData] = useState({})

  useEffect(() => {
    const id = localStorage.getItem('id')
    fetch(`https://dummyjson.com/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setuserData(data)
        // console.log(data)
      })
  }, [])
  return (
    <div className='user-container'>
      <div className='img'>
        <img src={userData?.image} alt='userImg' />
      </div>
      <div className='uesr-body'>
        <div className='user-name'>Name : {`${userData?.firstName} ${userData?.maidenName} ${userData?.lastName}`} </div>
        <div className='user-email'>Email : {`${userData?.email}`} </div>
        <div className='user-Address'> Address : {`${userData?.address?.address} ${userData?.address?.city} ${userData?.address?.postalCode} ${userData?.address?.state}`} </div>
      </div>


    </div>
  )
}

export default Profile
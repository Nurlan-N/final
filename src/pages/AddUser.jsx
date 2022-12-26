import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export const AddUser = () => {
    const [newFistName,setNewFirstName] = useState('');
    const [newLastName,setNewLastName] = useState('');
    const [newAvatar , setNewAvatar] = useState('')
    const [newemail,setNewEmail] = useState('');

    const UserHandler = () => {
        const addUser = async () => {
            
            const name = newFistName;
            const phone = newLastName;
            const email= newemail
            const avatar = newAvatar
            
            await axios.post('https://www.melivecode.com/api/users',{name,phone,email,avatar})
            
        }
        addUser();
        window.location.reload(false);
    }

    const FirstNameHandler = (e) => {
        setNewFirstName(e.target.value)
    }
    const LastNameHandler = (e) => {
        setNewLastName(e.target.value)
    }
 
    const EmailHandler = (e) => {
        setNewEmail(e.target.value)
    }
    const AvatarHandler = (e) => {
        setNewAvatar(e.target.value)
    }

  return (
    <div className='col-lg-5 mx-auto my-5  col-6'>
        <input className='form-control mt-5' onChange={FirstNameHandler} type="text" placeholder='First Name'  />
        <input className='form-control mt-5' onChange={LastNameHandler} type="text" placeholder='Last Name'  />
        <input className='form-control mt-5' onChange={AvatarHandler} type="text" placeholder='Avatar'  />
        <input className='form-control mt-5' onChange={EmailHandler} type="email" placeholder='Email' />
        <button onClick={UserHandler} className='btn btn-lg btn-success mt-5 w-100' >Add User</button>
    </div>
  )
}

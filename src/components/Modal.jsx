import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Modal = ({closeModal , id}) => {
    const [newFistName,setNewFirstName] = useState('');
    const [newLastName,setNewLastName] = useState('');
    const [newAvatar , setNewAvatar] = useState('')
    const [newemail,setNewEmail] = useState('');
    const [user,setUser] = useState([])

    
    useEffect(() => {
      const getUsers = async () => {
     const respons = id && await axios.get(`https://www.melivecode.com/api/users/${id}`)
        setUser(respons.data);
        
      }
      getUsers();
    },[id])
    const UserHandler = () => {
        const addUser = async () => {
            
            const fname = newFistName;
            const lname = newLastName;
            const email= newemail;
            const avatar = newAvatar;
            
            await axios.put(`https://www.melivecode.com/api/users/${id}`,{fname,lname,email,avatar})
            
        }
        addUser();
        //window.location.reload(false);
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
    <div className='col-lg-5 mx-auto mt-5  col-6'>
        <input className='form-control mt-5' onChange={FirstNameHandler} type="text" placeholder='First Name' defaultValue={user.fname} />
        <input className='form-control mt-5' onChange={LastNameHandler} type="text" placeholder='Last Name' defaultValue={user.lname} />
        <input className='form-control mt-5' onChange={AvatarHandler} type="text" placeholder='Avatar' defaultValue={user.avatar} />
        <input className='form-control mt-5 ' onChange={EmailHandler} type="email" placeholder='Email' defaultValue={user.email}/>
        <button className='btn btn-lg btn-danger mt-5 w-100 ' onClick={() => closeModal(false)}>Cancel</button>
        <button onClick={UserHandler} className='btn btn-lg btn-success my-5 w-100' >Update User</button>
    </div>  
  )
}

import React, { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'

export const Users = (props) => {
    const [searchValue,setSearchValue] = useState('')

    const InputHandler = (e) =>{
        setSearchValue(e.target.value)
      }
    
      const filteredUsers = props.userList.filter(user => user.fname.toLowerCase().includes(searchValue.toLowerCase()))
      return (
        <div className="container ">
                    <div>
                  <input onChange={InputHandler} type="text" placeholder='Search' className='form-control w-50  my-3 mx-auto' />
            <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
                filteredUsers && filteredUsers.map(user => {
                    return (
                      <tr  key={user.id}>
                        <td>{user.id}</td>
                        <td className='col-md-3'><img className='w-50' src={user.avatar} alt="" /></td>
                        <td>{user.fname + " " + user.lname}</td>
                        <td>{user.username}</td>
                      </tr>
                    )
                })
            }
          </tbody>
        </Table>
        </div>
        </div>
      )
}

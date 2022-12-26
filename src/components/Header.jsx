import { Link } from 'react-router-dom'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center" >
                <div className="col-lg-2 col-1 left">
                    <Link to='/' >Home</Link>
                </div>
                <div className="col-lg-10 col-11 right">
                    <Link to='/users' className='ms-5' >Users</Link>
                    <Link to='/about' className='ms-5' >About</Link>
                    <Link to='/admin' className='ms-5' >Admin</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

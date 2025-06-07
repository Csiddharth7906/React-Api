import React, { useContext } from 'react'
import Userdetails from './Userdetails'
import { Link } from 'react-router-dom'
import Context, { UserContext } from '../context/Context'

const User = () => {
 const {user , setUser}  =   useContext(UserContext);

  return (
    <div>
        <h1 className='text-3xl'>User List</h1>
        <div className=' flex flex-col w-1/2   mt-10'>
                {user.map(u =>  <Link key={u.id} to={`/user/${u.id}`} className='p-3 mb-3 bg-green-200'>{u.username}</Link>)}
               
        </div>
    </div>
  )
}

export default User
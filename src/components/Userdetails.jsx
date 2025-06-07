import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Userdetails = () => {
  const {id}=useParams()
  const navigate =useNavigate();
 const {user}= useContext(UserContext)
  return (
    <div>
      <h1 className='text-red-500 text-2xl font-bold'>
      Name: {user[id].username}
      </h1>
      <p  className='text-red-500 text-2xl font-semibold'>Email: {user[id].email}</p>
      <p className='text-red-500 text-2xl font-semibold'>Address: {user[id].city}</p>
      <button onClick={()=> navigate(-1)}  className='bg-blue-500 mt-5 p-2 rounded-lg text-white'>go back</button>
    </div>
  )
}

export default Userdetails
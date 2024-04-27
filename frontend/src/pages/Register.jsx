import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
const changeInputHandler = (e) => {
  setUserData(prevState =>{
    return {
      ...prevState,
      [e.target.name]: e.target.value
    }
  })
}

  return (
    <section className='h-screen flex justify-center items-center '>
      <div className='border-solid border-gray-600 border-2 shadow-lg shadow-black p-8 w-96 bg-slate-700 text-white '>
        <h2 className='text-3xl'>Signup</h2>
        <form className='flex flex-col gap-3' >
          <p className='text-red-500'>This an error message</p>
          <input className='outline-none text-slate-800 p-1' type="text" placeholder="Enter your name" name='name' value={userData.name} onChange={changeInputHandler}/>
          <input className='outline-none text-slate-800 p-1' type="text" placeholder="Enter your email" name='email' value={userData.email} onChange={changeInputHandler}/>
          <input className='outline-none text-slate-800 p-1' type="password" placeholder="Enter your pasword" name='password' value={userData.password} onChange={changeInputHandler}/>
          <input className='outline-none text-slate-800 p-1' type="password" placeholder="Confirm your password" name='confirmPassword' value={userData.confirmPassword} onChange={changeInputHandler}/>
          <button className='bg-slate-800 text-white p-2 rounded-sm' type='submit'>Register</button>
        </form>
        <small>Already have an account? <Link className='underline' to="/login">Login</Link></small>

      </div>
    </section>
  )
}

export default Register

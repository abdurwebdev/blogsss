import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Register(){
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  const handleLogin = async (e) =>{
    e.preventDefault();
    try {
      let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,{
        email,
        password
      },{
        withCredentials:true
      })
      alert(res.data);
    } catch (error) {
      alert("Error: "+error.message);
    }
  }
  return (
    <>
    <div id="main" className='w-full h-screen bg-black flex items-center text-white font-[gilroy] flex-col justify-center'>
      <h1 className='font-bold text-3xl mb-3 w-96'>Login To Your Account</h1>
      <form onSubmit={handleLogin}>
        <h1>Enter your email</h1>
        <input className='w-96 h-10 rounded-md bg-zinc-800 outline-none placeholde:text-white px-3' type="text" value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }}  placeholder='Enter Your email'/>
        <h1 className='mt-3'>Enter your password</h1>
        <input className='w-96 h-10 rounded-md bg-zinc-800 outline-none placeholde:text-white px-3' type="password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}  placeholder='Enter Your password'/>
        <input className='block mt-3 bg-blue-500 px-5 py-2 w-96 rounded-md' type="submit" value="Login" />
        <Link className='text-white mt-3' to="/register">Don't have an account?Register</Link>
      </form>
    </div>
    </>
  )
}

export default Register;
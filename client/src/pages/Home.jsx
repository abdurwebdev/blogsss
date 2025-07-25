import axios from 'axios'
import React, { useEffect, useState } from 'react'
function  Home (){
  let [user,setData] = useState(null);
  let userData = async () =>{
    try {
      let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/home`,{
        withCredentials:true
      });
      setData(res.data);
    } catch (error) {
      console.error("Failed to fetach user Data: ",ErrorEvent)
    }
  }
  useEffect(()=>{
    userData();
  },[])
  return (
    <>
    <div className='w-full h-screen bg-black text-white font-[gilroy]'>
      {user ? (
        <>
        <div className='flex items-center justify-between p-4'>
          <h1 className='text-3xl font-bold'>Welcome <span className='font-normal '>{user.username}👋</span></h1>
          <h1 className='text-3xl font-bold'>Email : {user.email}</h1>
        </div>
        <div className='w-full flex items-end justify-end px-4'>
          <a href="/logout" className='px-5 py-2 rounded-md bg-red-500'>Logout</a>
        </div>
        </>
      ):(
        <h1>Loading userdata....</h1>
      )}
    </div>
    </>
  )
}

export default Home
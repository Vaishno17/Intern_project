import React from 'react';
import { Form, Link } from 'react-router-dom';
import signInImg from "../assets/bookmedi.webp";
import signInImg1 from "../assets/distributImg.webp";
import signInImg2 from "../assets/mediposter.webp";
import signInImg3 from "../assets/doctmedi.webp";
import { useState } from 'react';



const SignIn = () => {

  const [page, setPage] = useState(true);

  return (
    <div className=' w-screen lg:h-fit bg-black min-h-screen flex flex-col lg:flex-row'>
      <div className=' lg:w-1/2 lg:h-screen '>
        <Link to='/' className=' text-center text-5xl text-white '>
          ⬅
        </Link>
        { page ?
          <div>
          <Form className=' mt-20 gap-4 text-xl flex-col flex items-center'>
            <label className=' text-white text-left'>Name:</label>
            <input type='text' placeholder='Enter your name....' className=' hover:placeholder:hidden bg-white rounded-sm pl-1 text-lg text-left placeholder:text-base' />
            <label className=' text-white'>Email:</label>
            <input type='email' placeholder='Enter your email....' className=' text-ellipsis bg-white rounded-sm pl-1 text-lg text-left placeholder:text-base' />
            <label className=' text-white'>Create Password:</label>
            <input type='password' placeholder='Enter your password' pu className=' text-ellipsis bg-white rounded-sm pl-1 text-lg text-left placeholder:text-base' />
            <label className=' text-white'>Confirm Password:</label>
            <input type='password' placeholder='Enter your password' className=' text-ellipsis bg-white rounded-sm pl-1 text-lg text-left placeholder:text-base' />
            <p>Already have an account?<span onClick={()=>setPage(prev => !prev)} className=' cursor-pointer hover:text-green-500'>  Sign in now</span> </p>
          </Form>
        </div>:
        <div>
        <Form className=' mt-20 gap-4 text-xl flex-col flex items-center'>
          <label className=' text-white'>Email:</label>
          <input type='email' placeholder='Enter your email....' className=' text-ellipsis bg-white rounded-sm pl-1 text-lg text-left placeholder:text-base' />
          <label className=' text-white'> Password:</label>
          <input type='password' placeholder='Enter your password' pu className=' text-ellipsis bg-white rounded-sm pl-1 text-lg text-left placeholder:text-base' />
          <p>Don't have an account?<span  onClick={()=>setPage(prev => !prev)} className=' cursor-pointer hover:text-green-500'>  Register now</span> </p>
        </Form>
      </div>
        }
        

      </div>
      <div className=' relative lg:w-1/2 overflow-hidden '>
        <img className=' w-60 h-60 absolute left-60 top-0 z-10' src={signInImg3} alt='imgsort2' />
        <img className=' w-64 absolute right-0 top-32 z-40' src={signInImg2} alt='imgsort2' />
        <img className=' w-96 h-56 absolute left-28 top-60 z-20' src={signInImg1} alt='imgsort' />
        <img className=' w-72 h-52 absolute right-36 bottom-0 z-10' src={signInImg} alt='imgsort2' />
      </div>
    </div>
  )
}

export default SignIn
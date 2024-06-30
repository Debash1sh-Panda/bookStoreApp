import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function SignUp() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
            <div className="modal-box ">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                <h3 className="font-bold text-lg">SignUp</h3>
                <div className='mt-4 space-y-2'>
                    <span>Full Name</span>
                    <br/>
                    <input type='text' placeholder='Enter your FullName' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("text", { required: true })} /><br/>
                    {errors.text && <span className='text-sm text-red-400'>This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br/>
                    <input type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} /><br/>
                    {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Password</span>
                    <br/>
                    <input type='password' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })} /><br/>
                    {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
                </div>

                <div className='flex justify-around mt-4'>
                    <button className="text-black px-3 py-1 rounded-md bg-yellow-200 duration-300 cursor-pointer hover:bg-yellow-500 hover:text-black">Signup</button>
                    <p>Have account? <button to='/' className='underline text-blue-500 cursor-pointer' 
                     onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button></p>
                     <Login/>
                </div>
                </form>
            </div>
         </div>
      </div>
    </>
  )
}

export default SignUp

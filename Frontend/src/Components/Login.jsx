import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>

                <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Login</h3>
                <div className='mt-4 space-y-2 '>
                    <span>Email</span>
                    <br/>
                    <input type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} /><br/>
                    {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
                </div>
                <div className='mt-5 space-y-2'>
                    <span>Password</span>
                    <br/>
                    <input type='password' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })} /><br/>
                    {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
                </div>

                <div className='flex justify-around mt-4'>
                    <button className="text-black px-3 py-1 rounded-md bg-yellow-200 duration-300 cursor-pointer hover:bg-yellow-500 hover:text-black">Login</button>
                    <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                </div>
                </form>
            </div>
        </dialog>
      </div>
    </>
  )
}

export default Login

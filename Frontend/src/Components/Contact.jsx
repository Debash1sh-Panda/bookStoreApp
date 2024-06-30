import React from 'react'
import { useForm } from "react-hook-form"


function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='max-w-screen-2xl container mt-20 md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className="w-[600px] mt-40 mx-80">
      <h1 className='px-10 text-slate-700 text-2xl font-bold'>Contact Us</h1>
            <div className="">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                <div className='mt-4 space-y-2'>
                    <span className='text-slate-700'>Name</span>
                    <br/>
                    <input type='text' placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("text", { required: true })} /><br/>
                    {errors.text && <span className='text-sm text-red-400'>This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span className='text-slate-700'>Email</span>
                    <br/>
                    <input type='email' placeholder='Enter your Email Address' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} /><br/>
                    {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span className='text-slate-700'>Message</span>
                    <br/>
                    <textarea placeholder='Type your message' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })} /><br/>
                    {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
                </div>

                <div className='flex justify-around mt-4'>
                    <button className="text-black px-3 py-1 rounded-md bg-yellow-200 duration-300 cursor-pointer hover:bg-yellow-500 hover:text-black">Submit</button>
                </div>
                </form>
            </div>
         </div>
      </div>
    </>
  )
}

export default Contact

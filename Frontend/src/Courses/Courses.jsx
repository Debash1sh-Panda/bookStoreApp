import React from 'react'
import Navbaar from '../Components/Navbaar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'

function Courses() {
  return (
    <>
      <Navbaar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default Courses

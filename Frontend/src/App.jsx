import React from 'react'
import Home from './Home/Home'
import { Route, Routes, Navigate} from "react-router-dom"
import Courses from './Courses/Courses'
import SignUp from './Components/SignUp'
import Contacts from './Contact/Contacts'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider.jsx';

const App = () => {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
      <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Toaster/>
      </div>
      </> 
  )
}

export default App

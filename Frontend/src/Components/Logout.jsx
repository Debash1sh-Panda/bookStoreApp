import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {

    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {    
        try {
            setAuthUser(
                {...authUser,
                user:null}
            )
            localStorage.removeItem("Users")
            toast.success("Logout Successfully");
            // window.location.reload();
            
        setTimeout( () => {
          window.location.reload();
          document.getElementById("my_modal_3").close();
          
        }, 2000)
        } catch (error) {
            toast.error("Error :"+ error);
            setTimeout(()=> {},2000);
        }
    };

  return (
    <div className='px-3 py-2 bg-red-400 text-white rounded-md cursor-pointer' onClick={handleLogout}>
      Logout
    </div>
  )
}

export default Logout

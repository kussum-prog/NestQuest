import React from 'react'
import Sidebar from "../Components/Profile/Sidebar"

const Profile = () => {
  return (
    <div className=' py-10 flex-col md:flex-row flex-wrap gap-10 justify-center items-center'>
        {
            !Profile
        }
        {
            Profile && (
                <>
                
                <Sidebar  />
               
               
                </>
            )
        }

    </div>
  )
}

export default Profile
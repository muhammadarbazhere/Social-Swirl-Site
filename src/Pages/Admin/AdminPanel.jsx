import React from 'react'
import DashboardPage from '../../Dashboard/MainNavbar/Files/DashboardParts/DashboardPage'
import Career from '../../Dashboard/MainNavbar/Files/CareerParts/Career'
import ELearning from '../../Dashboard/MainNavbar/Files/ELearningParts/ELearning'
import User from '../../Dashboard/MainNavbar/Files/UserParts/User'
import Avatar from '../../Dashboard/MainNavbar/Files/Avatar'
import Welcome from './Welcome'


function AdminPanel() {
  return (
    <div className='bg-blue-100 h-full pb-6 pt-24 w-full items-center justify-center flex flex-col'>
      


<div className="Navbar space-x-4 py-0  flex   items-center justify-center">
          <DashboardPage />
          <Career />
          <ELearning />
          <User />
         <Avatar/>
        </div>





{/* <div className='mt-20 mb-20'>
    <Welcome/>
</div> */}

        </div>
  )
}

export default AdminPanel
import React from 'react'
import AddJobInternshipForm from '../../../../../Components/JobsInternships/AddJobInternship'

function AddJobs() {
  return (
    <div className=' w-full h-full px-12 pt-6 bg-blue-100'>

    {/* <h1 className=' w-full h-28 text-gray-500  text-md flex items-center'>You are here: Home / Dashboard / Add New Jobs</h1> */}
     <h1 className='w-full h-12 text-gray-800  text-4xl font-[Chivo] font-semibold text-center '>
      Add New Job/Internship
     </h1>
    <hr />
  
  <div className='pt-8 pb-14'>
  <AddJobInternshipForm/>
  </div>
  
      </div>
 
  )
}

export default AddJobs
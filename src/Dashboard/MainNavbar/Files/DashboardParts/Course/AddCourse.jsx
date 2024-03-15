import React from 'react'
import AddCourseForm from '../../../../../Components/CoursesFiles/AddCourseForm'

function AddCourse() {
  return (
    <div className=' w-full h-full px-12 pt-6 bg-blue-100'>

  {/* <h1 className=' w-full h-28 text-gray-500  text-md flex items-center'>You are here: Home / Add New Courses</h1> */}
   <h1 className='w-full h-12 text-gray-800 text-center justify-center  text-4xl font-[Chivo] font-bold flex items-center'>Add New Courses
   </h1>
  <hr />

<div className='pt-8 pb-14'>
<AddCourseForm />
</div>

    </div>
  )
}

export default AddCourse
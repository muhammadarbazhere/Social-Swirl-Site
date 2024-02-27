import React from 'react'
import logoImg from '../../assets/logo.jpg'
import HomeA from './HomeA'
import Employ from './Employees/Employ'
import Testimonials from './Testimonials/Testimonials'

function Home() {
  return (

  <div className=' bg-blue-100 h-full '>
    <div className=' w-full h-auto  lg:flex pt-16 lg:pt-0   flex justify-center  items-center  md:h-auto md:mb-32 lg:h-screen  md:m-auto  '>

<div className='flex  md:mx-16 flex-col md:flex-row  lg:flex-row'>

<div className='w-full flex justify-center align-middle  '>
    <div className='mx-5 md:mx-4 md:w-full lg:flex-col   lg:flex justify-center  lg:w-4/5/3 lg:ml-16   '>
    <h1 className='font-[Chivo] text-blue-500 text-5xl sm:text-7xl mb-3'>Social Swirl</h1>
                        <p className='text-xl font-[Chivo] text-[#374151]'>Social Swirl is a dynamic and innovative software company founded by Danial Khan in 2022. Based in United Kingdom. Social Swirl specialises in Software and media solutions with a focus on new creations.</p>
   
                        <div className=" flex flex-col lg:flex-row font-[Chivo]  lg:justify-start lg:space-x-8  mt-4 sm:items-center">
    <button className='border-2 border-blue-500 bg-blue-500 w-auto lg:w-44 h-14 sm:w-3/6 rounded-xl text-white hover:bg-blue-600'>Feasible Timing</button> 
<button className='border-2 border-blue-500 bg-blue-500 text-white  mt-2 lg:mt-0 w-auto lg:w-56 h-14 sm:w-3/6  rounded-xl hover:bg-blue-600'>Project Base Learning</button> 
                          </div>
     </div>
 </div>



    <div className=' md:w-auto lg:w-1/2 '>
                <img src={logoImg} alt="loading" />
            </div>
</div>





</div >
<div >

<HomeA/>
<Employ/>
<Testimonials/>

</div>
</div>


  



   
  )
}

export default Home
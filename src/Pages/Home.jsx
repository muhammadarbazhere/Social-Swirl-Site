import React from 'react'
import logoImg from '../assets/logo.jpg'

function Home() {
  return (
    <div className=' w-full h-auto  lg:flex   flex justify-center  items-center  md:h-screen lg:h-screen  md:m-auto bg-blue-100 '>


<div className='flex  md:mx-16 flex-col md:flex-row  lg:flex-row'>

<div className='w-full flex justify-center align-middle  '>
    <div className='mx-5 md:mx-0 md:w-full lg:flex-col   lg:flex justify-center  lg:w-4/5/3 lg:ml-16   '>
    <h1 className='font-[Chivo] text-blue-500 text-5xl sm:text-7xl mb-3'>Social Swirl</h1>
                        <p className='text-xl font-[Comfortaa]'>Social Swirl is a dynamic and innovative software company founded by Danial Khan in 2022. Based in United Kingdom. Social Swirl specialises in Software and media solutions with a focus on new creations.</p>
   
                        <div className=" flex flex-col lg:flex-row font-[Chivo]  lg:justify-start lg:space-x-2  mt-4 sm:items-center">
    <button className='border-2 border-blue-500 bg-blue-500 w-auto lg:w-56 h-14 sm:w-3/6 rounded-xl text-white'>Feasible Timing</button> 
<button className='border-2 border-blue-500 bg-blue-500 mt-2 lg:mt-0 w-auto lg:w-56 h-14 sm:w-3/6  rounded-xl text-white'>Project Base Learning</button> 
                          </div>
     </div>
 </div>



    <div className=' md:w-auto lg:w-1/2 '>
                <img src={logoImg} alt="loading" />
            </div>
</div>



    </div>
  )
}

export default Home
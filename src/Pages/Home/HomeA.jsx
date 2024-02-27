import React from 'react'
import homeImg from '../../assets/home1.jpg'

function HomeA() {
  return (
    <div className=' flex flex-col h-auto p-4 lg:flex-row lg:pl-24 lg:items-center'>

<div className="  w-full lg:max-w-screen-sm   lg:h-3/4 m-0
 p-0 lg:flex lg:justify-center">
      <img className='w-full' src={homeImg} alt="loading" />
</div>

<div className=" pt-4  lg:h-3/4 lg:w-3/4 lg:pr-2 md:h-auto  lg:pl-4 lg:flex lg:flex-col lg:justify-start">

    <h1 className='font-[Comfortaa] text-3xl lg:text-4xl text-black font-bold mb-2'>Welcome to Social Swirl</h1>

    <h1 className='font-[Chivo] text-xl text-blue-900 font-bold mb-2 '>Best Software House of Pakistan</h1>

    <p className='font-[Chivo] text-[#374151] text-xl mb-4'>The company's mission is to provide high-quality software solutions and media that help businesses and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to excellence, Social Swirl is dedicated to providing personalised, reliable, and affordable services to its clients. AIMS Our mission is to provide high-quality software solutions and media services that help businesses and individuals optimise their online presence and achieve their goals.</p>

    <button className='font-[Chivo]  bg-blue-500 border-2 border-blue-500 text-white px-4 py-3 mb-3 rounded-lg lg:w-32 hover:bg-blue-600 '> Enroll Now</button>
</div>

    </div>
  )
}

export default HomeA
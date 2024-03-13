import React, { useEffect, useRef } from 'react';
import Internships from '../../../../Components/JobsInternships/Internships'

import { MdOutlineSearch } from "react-icons/md";

function Internship() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

  }, []); 

  return (

    <div className='flex w-full h-full flex-col pb-6 px-10 font-[Chivo] bg-blue-100'>

<div className='flex'>
      <h1 className="w-full h-28 text-gray-500 text-md flex items-center">
        You are here: Home / Career / Internship
      </h1>

      <div className="flex items-center gap-2">
        <input
          ref={inputRef} 
          type="text"
          placeholder="Search for internships..."
          className="border border-gray-300 px-6 py-2 rounded-md focus:outline-none focus:border-blue-500" 
          />
             <MdOutlineSearch size={20} className="text-gray-500 " /> 
      </div>
      </div>
    

<Internships/>
    </div>

  );
}

export default Internship
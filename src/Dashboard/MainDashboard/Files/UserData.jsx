import React from 'react';
import { FaClipboardUser } from "react-icons/fa6";

const UserData = () => {
  return (
    <div className="bg-white mt-8 p-4 font-[Chivo]">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 p-2 flex gap-1 items-center font-bold text-lg">
            
            <FaClipboardUser className='' size={20}/>
            <h1> User Data</h1>
           </div>

        <div className="col-span-4 bg-gray-200 p-2 text-center font-bold">All Properties</div>

        <div className="col-span-1 bg-gray-100 p-2">
          <input type="checkbox" className="mr-2" />
          NAME
        </div>
        <div className="col-span-1 bg-gray-100 p-2">
         
          ROLE
        </div>
        <div className="col-span-1 bg-gray-100 p-2">
        
          TYPE
        </div>
        <div className="col-span-1 bg-gray-100 p-2">
         
          EMAIL
        </div>
        <div className="col-span-1 p-2">
          <input type="checkbox" className="mr-2" />
          Lori Lynch
        </div>
        <button className="col-span-1 w-24 p-2 bg-green-500 text-white rounded">Admin</button>
        <div className="col-span-1 p-2">Full Control</div>
        <div className="col-span-1 p-2">johndoe@gmail.com</div>
        <div className="col-span-1 p-2">
          <input type="checkbox" className="mr-2" />
          Lori Lynch
        </div>
        <button className="col-span-1 w-24 p-2 bg-blue-500 text-white rounded">User</button>
        <div className="col-span-1 p-2">Post</div>
        <div className="col-span-1 p-2">johndoe@gmail.com</div>
        <div className="col-span-1 p-2">
          <input type="checkbox" className="mr-2" />
          Lori Lynch
        </div>
        <button className="col-span-1 w-24 p-2 bg-yellow-500 text-white rounded">Member</button>
        <div className="col-span-1 p-2">Post</div>
        <div className="col-span-1 p-2">johndoe@gmail.com</div>
        <div className="col-span-4 flex justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserData;

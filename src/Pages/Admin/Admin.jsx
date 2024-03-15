import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const SubmitClick = () => {
    navigate("/MyWelcome");
  };

  return (
    <div className="bg-blue-100 flex-col pt-12 pb-36 w-full  flex items-center justify-center">
      <h1 className="text-gray-700 font-bold text-4xl pb-24">Admin Page</h1>

      <form className=" w-2/5 bg-white px-28 py-16 rounded-md">
        <h1 className=" flex border bg-gray-300  border-gray-300 rounded-lg items-center pl-4 mb-6">
          <span>
            <FaEnvelope className="text-gray-600 mr-1" />
          </span>
          <input
            type="email"
            placeholder="Email"
            className="w-full text-gray-600 bg-fixed bg-gray-300  py-2 px-3 rounded focus:bg-gray-300"
          />
        </h1>

        <h1 className="flex border bg-gray-300 border-gray-300 rounded-lg items-center pl-4 mb-6">
          <span>
            <FaLock className="text-gray-600 mr-1" />
          </span>
          <input
            type="password"
            placeholder="Password"
            className="w-full text-gray-600 bg-gray-300 py-2 px-3 rounded border border-gray-300 focus:bg-gray-300"
          />
        </h1>

        <div className="items-center  flex justify-center pt-4">
          <button
            onClick={SubmitClick}
            type="submit"
            className="  bg-gradient-to-r from-cyan-400 to-blue-500  text-white font-bold py-3 px-6 rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;

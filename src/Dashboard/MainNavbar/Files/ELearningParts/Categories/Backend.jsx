import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward, MdOutlineMiscellaneousServices, MdOutlineSearch } from "react-icons/md";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { MdAddToPhotos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import EditCourse from "../../../../../Components/CoursesFiles/EditCourse";
import { deleteCourseFunc } from "../../../../../Components/CourseSlice";
import { useNavigate } from "react-router-dom";

function Backend() {
  const courses = useSelector((state) => state.courseStore.data);

  const backendCourses = courses.filter(
    (course) => course.Category === "Back-End Development"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editCourseId, setEditCourseId] = useState(null);

  const handleDelete = (id) => {
    console.log("Deleting course with ID:", id);
    dispatch(deleteCourseFunc(id));
  };

  const handleEdit = (id) => {
    setEditCourseId(id);
  };

  const handleCloseEdit = () => {
    setEditCourseId(null);
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []); 

  const handleAdd = () => {
    navigate("/MyAddCourse");
  };

  return (
    <div className="bg-blue-100 lg:px-10 font-[Chivo] pt-4 pb-12">
      
<div className='flex'>
      <h1 className="w-full h-28 text-gray-500 text-md flex items-center">
        You are here: Home / E-Learning / Back-End Development
      </h1>

      <div className="flex items-center gap-2">
        <input
          ref={inputRef} 
          type="text"
          placeholder="Search Courses..."
          className="border border-gray-300 px-6 py-2 rounded-md focus:outline-none focus:border-blue-500" 
          />
             <MdOutlineSearch size={20} className="text-gray-500 " /> 
      </div>
</div>

<h1 className="text-center font-semibold text-3xl pt-6 pb-6 text-blue-400">
    Back-End Courses
</h1>
<hr />

      <div className="pt-8">
        {editCourseId && (
          <EditCourse courseId={editCourseId} onClose={handleCloseEdit} />
        )}
      </div>

      <div className="flex flex-wrap gap-16   justify-center  mb-5">
        {backendCourses.length > 0 ? (
          backendCourses.map((item) => (
            <div
              key={item.id}
              className="w-[28%] bg-white border-2 border-white   rounded-lg shadow-md overflow-hidden relative"
            >
              <div className="px-0 justify-center flex flex-col pb-0 h-auto ">
                <div className=" flex items-center justify-center w-full   ">
                  {item.Image ? (
                    <img
                      className="w-full h-full "
                      src={item.Image}
                      alt="Course Link"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <div className="px-3">
                  <p className="text-xl mt-3 font-bold  text-gray-800">{item.Title}</p>
                  <p className="text-sm mb-1 text-gray-700 font-bold flex items-center  gap-1 ">
                    {item.Category}
                    <span>
                      <MdArrowOutward size={15}/>
                    </span>
                  </p>

                  <p className="text-md text-gray-600 leading-snug">
                    {item.Description}
                  </p>

                  <div className="flex justify-end">
                    <p className="text-lg font-semibold text-gray-700">{item.Duration}</p>
                  </div>

                  <div className="flex justify-end pt-1">
                    <p className="text-2xl font-[Comfortaa] text-blue-500 font-semibold">
                      Only ${item.Charges}
                    </p>
                  </div>
                </div>

                <div className=" right-0 flex space-x-4 m-2">
                  <button
                    className="bg-white border-2 border-blue-400 rounded-full px-2 py-2 hover:bg-blue-400 hover:text-white text-blue-400"
                    onClick={() => handleDelete(item.id)}
                  >
                    <RiDeleteBinLine size={22} />
                  </button>
                  <button
                    className="bg-white border-2 border-blue-400 rounded-full px-2 py-2 hover:bg-blue-400 hover:text-white text-blue-400"
                    onClick={() => handleEdit(item.id)}
                  >
                    <RiEdit2Line size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
            
            <div>
          <p className="font-bold text-gray-600">No courses available yet in Back-End Development category.</p>

          <div className="flex justify-center mt-6">
          <div
            className="flex gap-2 text-white bg-red-500 hover:bg-black rounded-full px-6 py-2 justify-center items-center cursor-pointer "
            onClick={handleAdd}
          >
            <button className="text-xl">Add Courses</button>
            <MdAddToPhotos size={20} />
          </div>
        </div>
        </div>


        )}
      </div>
    </div>
  );
}

export default Backend
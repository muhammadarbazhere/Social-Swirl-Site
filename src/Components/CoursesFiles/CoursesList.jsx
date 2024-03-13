import React, { useState } from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourseFunc } from "../CourseSlice";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import EditCourse from "./EditCourse";
import { useNavigate } from "react-router-dom";

function CoursesList() {
  const courses = useSelector((state) => state.courseStore.data);
  console.log("Courses:", courses);
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

  const handleAdd = () => {
    navigate("/MyAddCourse");
  };

  return (
    <div className="bg-blue-100 px-0 font-[Chivo]">
      {editCourseId && (
        <EditCourse courseId={editCourseId} onClose={handleCloseEdit} />
      )}

      <div className="flex justify-end my-4">
        <div
          className="flex text-white bg-green-500 rounded-full px-3 py-2 justify-center items-center cursor-pointer "
          onClick={handleAdd}
        >
          <button className="  px-4 text-xl">Add Courses</button>
          <MdOutlineMiscellaneousServices size={20} />
        </div>
      </div>

      <div className="flex flex-wrap gap-16  bg-red-200  justify-center  mb-5">
        {courses &&
          courses.map((item) => (
            <div
              key={item.id}
              className="w-[25%] bg-yellow-200   rounded-lg shadow-md overflow-hidden relative"
            >
              <div className="px-0 justify-center flex flex-col pb-2 h-auto   ">
                <div className=" flex items-center justify-center w-full   ">
                  {item.Image ? (
                    <img
                      className="w-full h-full "
                      src={item.Image}
                      alt="Course Thumbnail"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>

                <div className="px-4">
                  <p className="text-xl mt-2  font-semibold  ">{item.Title}</p>
                  <p className="text-md flex items-center  gap-2">
                    {item.Category}
                    <span>
                      <MdArrowOutward />
                    </span>
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    {item.Description}
                  </p>

                  <div className="flex justify-end">
                    <p className="text-lg font-semibold">{item.Duration}</p>
                  </div>

                  <div className="flex justify-end">
                    <p className="text-xl font-[Comfortaa] text-blue-500 font-semibold">
                      Only ${item.Charges}
                    </p>
                  </div>
                  
                </div>
              </div>
              <div className=" right-0 flex space-x-4 m-2">
                <button
                  className="bg-red-700 rounded-full px-3 py-1 text-white"
                  onClick={() => handleDelete(item.id)}
                >
                  <RiDeleteBinLine size={22} />
                </button>
                <button
                  className="bg-blue-700 rounded-full px-3 py-1 text-white"
                  onClick={() => handleEdit(item.id)}
                >
                  <RiEdit2Line size={22} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CoursesList;

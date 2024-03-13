import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCourseFunc } from "../CourseSlice";
import { GrClose } from "react-icons/gr";

export default function EditCourse({ courseId, onClose }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseStore.data);
  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    Category: "",
    Charges: "",
    Image: null, 
  });

  useEffect(() => {
    if (courseId !== null) {
      const editingCourse = courses.find(
        (course) => course.id === courseId
      );
      if (editingCourse) {
        setFormData(editingCourse);
      }
    }
  }, [courseId, courses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCourseFunc({ id: courseId, updatedCourse: formData }));
    setFormData({
      // Clear form data after submission
      Title: "",
      Description: "",
      Category: "",
      Charges: "",
      Duration: '',
      Image: null,
    });
    onClose(); // Close the edit modal
  };


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };


  const handleUndo = () => {
    onClose(); // Close the edit modal without saving changes
  };

  return (
    <div className="mx-auto pb-16 font-[Chivo] w-full md:w-2/5 ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
        <button
          onClick={handleUndo}
          className="absolute top-0 right-0 mr-6 p-1 mt-4 border-2 border-blue-400 rounded-full text-blue-400"
        >
          <GrClose size={15}/> 
        </button>
        <h1 className="text-3xl text-gray-600 font-bold mb-5 text-center">
          {formData.Title}
        </h1>

        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-4">
            <label
              htmlFor="Title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Course Title
            </label>
            <input
              required
              id="Title"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Course Description
            </label>
            <input
              required
              id="Description"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Course Category
            </label>
            <select
              required
              id="Category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Front-End Development">
                Front-End Development
              </option>
              <option value="Back-End Development">Back-End Development</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Social Media Marketing">
                Social Media Marketing
              </option>
              <option value="Seo">Seo</option>
              <option value="Human Resource">Human Resource</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="Duration"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Course Duration
            </label>
            <select
              required
              id="Duration"
              className="appearance-none block w-full bg-white border border-gray-400 text-gray-700 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline overflow-y-scroll max-h-32"
              value={formData.Duration}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="30 days">30 days</option>
    <option value="45 days">45 days</option>
    <option value="65 days">65 days</option>
    <option value="2 months">2 months</option>
    <option value="3 months">3 months</option>
    <option value="4 months">4 months</option>
    <option value="5 months">5 months</option>
    <option value="6 months">6 months</option>
    <option value="7 months">7 months</option>
    <option value="8 months">8 months</option>
    <option value="10 months">10 months</option>
    <option value="1 year">1 year</option>
    <option value="2 year">2 years</option>
    <option value="4 years">4 years</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Charges"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Course Charges
            </label>
            <input
              required
              id="Charges"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Charges}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Image"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Course Link
            </label>
            <input
              id="Image"
              type="text"
              accept="image/*"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

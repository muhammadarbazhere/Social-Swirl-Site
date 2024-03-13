import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourseFunc } from '../CourseSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

export default function AddCourseForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Title: '',
    Description: '',
    Category: '',
    Charges: '',
    Duration: '',
    Image: '', 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourseFunc(formData));
    navigate('/MyCourseList');
    setFormData({
      Title: '',
      Description: '',
      Category: '',
      Charges: '',
      Duration: '',
      Image: '',
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: id === 'Charges' ? parseFloat(value) : value,
    }));
  };

  return (
    <div className="mx-auto mt-10 w-full md:w-2/3 font-[Chivo] lg:w-2/5">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className=" w-full h-auto flex justify-center items-center rounded-md mb-2">
        
          <img src={logo} alt="Logo" className="mb-5 w-24 h-24" />

        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-4">
            <label htmlFor="Title" className="block text-gray-500 text-sm font-bold mb-2">Course Title</label>
            <input
              required
              id="Title"
              type="text"
              placeholder='Course Title'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Description" className="block text-gray-500 text-sm font-bold mb-2">Course Description</label>
            <input
              required
              id="Description"
              type="text"
              placeholder='Course Description'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
  <label htmlFor="Category" className="block text-gray-500 text-sm font-bold mb-2">Course Category</label>
  <select
    required
    id="Category"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
    value={formData.Category}
    onChange={handleChange}
  >
    <option value="">Select a category</option>
    <option value="Front-End Development">Front-End Development</option>
    <option value="Back-End Development">Back-End Development</option>
    <option value="Graphic Designing">Graphic Designing</option>
    <option value="Social Media Marketing">Social Media Marketing</option>
    <option value="Seo">Seo</option>
    <option value="Human Resource">Human Resource</option>
  </select>
</div>

          <div className="mb-4">
            <label htmlFor="Charges" className="block text-gray-500 text-sm font-bold mb-2">Course Charges</label>
            <input
              required
              id="Charges"
              type="number"
              step="0.01"
              placeholder='Course Charges'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Charges}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
  <label htmlFor="Category" className="block text-gray-500 text-sm font-bold mb-2">Course Duration</label>
  <select
    required
    id="Duration"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
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
            <label htmlFor="Image" className="block text-gray-500 text-sm font-bold mb-2">Course Link</label>
            <input
              id="Image"
              type="text"
              placeholder='Paste course link here...'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Image}
              onChange={handleChange}
            />
            {formData.Image && (
              <div className="mt-2">
                <img src={formData.Image} alt="Course Image" className="max-w-full h-auto" />
              </div>
            )}
          </div>
           <button
            type="submit"
            disabled={!formData.Title || !formData.Description || !formData.Category || !formData.Charges || !formData.Duration || !formData.Image}
            className={`bg-blue-500 ${(!formData.Title || !formData.Description || !formData.Category || !formData.Charges || !formData.Duration || !formData.Image) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`}
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

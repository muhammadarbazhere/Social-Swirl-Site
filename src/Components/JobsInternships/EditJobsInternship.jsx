import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editJobInternship } from '../JobsInternshipSlice';
import { useParams } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

function EditJobsInternship() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: jobs } = useSelector(state => state.jobsInternshipsStore);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    jobOrInternship: '',
    status: 'active', // Default status
  });

useEffect(() => {
  if (id && jobs.length > 0) {
    const job = jobs.find((user) => user.id === id);
    setFormData(job);
    console.log("Fetched Job:", job);
  }
}, [id, jobs]);






  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(editJobInternship({ ...formData, id: parseInt(id) }));
      handleSuccess();
    } catch (error) {
      console.error('Error updating job/internship:', error);
    }
  };

  const handleSuccess = () => {
    console.log('Job/Internship updated successfully!');
    window.location.href = '/MyJobsList';
  };
  return (
    <div className='bg-blue-100 pt-6 pb-20'>
      <div className="mx-auto w-full md:w-2/3 font-[Chivo] lg:w-2/5 ">
        <div className="bg-white font-[Chivo] shadow-md rounded px-8 pb-8 ">
          <h1 className='space-x-1 flex text-center items-center justify-center pt-8 pb-2'>
            <p className='text-4xl font-bold'>Update </p>
            <span className='text-3xl'>
              {formData.title}
            </span>
          </h1>
          <hr />
          <div className='w-full items-center py-6 flex justify-center'>
            <img src={logo} alt="Logo" className='w-24 h-24'/>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto ">
            <div className="mb-6">
              <label htmlFor="title" className="block text-gray-500 text-sm font-bold mb-2">Job Title</label>
              <input
                required
                id="title"
                type="text"
                placeholder='Job Title'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-500 text-sm font-bold mb-2">Job Description</label>
              <input
                required
                id="description"
                type="text"
                placeholder='Description'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 ">
              <label className="text-gray-500 text-sm font-bold ">Job / Internship</label>

              <div className='flex justify-between pt-2'>
                <div className="flex items-center mr-4">
                  <input
                    id="jobOrInternship"
                    type="checkbox"
                    name="jobOrInternship"
                    value="Job"
                    className="mr-2"
                    checked={formData.jobOrInternship === 'Job'}
                    onChange={handleChange}
                  />
                  <label htmlFor="job" className="text-gray-500">Job</label>
                </div>

                <div className="flex items-center">
                  <input
                    id="jobOrInternship"
                    type="checkbox"
                    name="jobOrInternship"
                    value="Internship"
                    className="mr-2"
                    checked={formData.jobOrInternship === 'Internship'}
                    onChange={handleChange}
                  />
                  <label htmlFor="internship" className="text-gray-500">Internship</label>
                </div>
              </div>
            </div>

            {/* Status Selection */}
            <div className="mb-6">
  <label className="text-gray-500 text-sm font-bold">Status</label>
  <select
    id="status"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
    value={formData.status}
    onChange={handleChange}
  >
    <option value="active">Active</option>
    <option value="closed">Closed</option>
  </select>
</div>

            
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              Update Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJobsInternship;

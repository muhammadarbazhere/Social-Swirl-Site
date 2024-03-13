import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editJobInternship } from "../JobsInternshipSlice";
import { GrClose } from "react-icons/gr";

export default function EditJobInternship({ jobId, onClose }) {
  const dispatch = useDispatch();
  const jobsInternships = useSelector((state) => state.JobInternshipStore.data);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    jobOrInternship: "",
    closeAfter: ""
  });

  useEffect(() => {
    if (jobId !== null) {
      const editingJobInternship = jobsInternships.find(
        (job) => job.id === jobId
      );
      if (editingJobInternship) {
        setFormData(editingJobInternship);
      }
    }
  }, [jobId, jobsInternships]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editJobInternship({ id: jobId, updatedJobInternship: formData }));
    setFormData({
      title: "",
      description: "",
      type: "",
      jobOrInternship: "",
      closeAfter: ""
    });
    onClose(); 
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUndo = () => {
    onClose(); 
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
          {formData.title}
        </h1>

        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job/Internship Title
            </label>
            <input
              required
              id="title"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job/Internship Description
            </label>
            <input
              required
              id="description"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job Type
            </label>
            <input
              required
              id="type"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.type}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="jobOrInternship"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Choose Job/Internship
            </label>
            <div className="flex mb-2">
              <input
                id="jobOrInternship"
                type="radio"
                name="jobOrInternship"
                value="job"
                className="mr-2 leading-tight"
                checked={formData.jobOrInternship === "job"}
                onChange={handleChange}
              />
              <label htmlFor="job" className="text-gray-500">
                Job
              </label>
              <div>
                <input
                  id="jobOrInternship"
                  type="radio"
                  name="jobOrInternship"
                  value="internship"
                  className="mr-2 ml-4 leading-tight"
                  checked={formData.jobOrInternship === "internship"}
                  onChange={handleChange}
                />
                <label htmlFor="internship" className="text-gray-500">
                  Internship
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="closeAfter"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Close After (in days)
            </label>
            <input
              required
              id="closeAfter"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.closeAfter}
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

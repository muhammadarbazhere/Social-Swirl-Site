import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJobInternship } from '../JobsInternshipSlice';
import { useNavigate } from 'react-router-dom';

export default function AddJobInternshipForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: '',
        jobOrInternship: '', // Updated state to hold job or internship selection
        closeAfter: '' // State to hold the duration after which job closes
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const todayDate = new Date().toISOString().slice(0, 10);
        dispatch(addJobInternship({
            ...formData,
            uploadDate: todayDate, // Set current date
            issue: todayDate // Set current date as default issue date
        }));
        navigate('/MySecondHome');
        setFormData({
            title: '',
            description: '',
            type: '',
            jobOrInternship: '', // Resetting job or internship selection after form submission
            closeAfter: ''
        });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div className="mx-auto mt-4 w-full md:w-2/3 font-[Chivo] lg:w-2/5">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-500 text-sm font-bold mb-2">Job/Internship Title</label>
                        <input
                            required
                            id="title"
                            type="text"
                            placeholder='Job/Internship Title'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-500 text-sm font-bold mb-2">Job/Internship Description</label>
                        <input
                            required
                            id="description"
                            type="text"
                            placeholder='Job/Internship Description'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-500 text-sm font-bold mb-2">Job Type</label>
                        <input
                            required
                            id="type"
                            type="text"
                            placeholder='Job Type'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.type}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2">Choose Job/Internship</label>
                        <div className="flex mb-2">
                            <input
                                id="jobOrInternship"
                                type="radio"
                                name="jobOrInternship"
                                value="job"
                                className="mr-2 leading-tight"
                                checked={formData.jobOrInternship === 'job'}
                                onChange={handleChange}
                            />
                            <label htmlFor="job" className="text-gray-500">Job</label>
                            <div>
                                <input
                                    id="jobOrInternship"
                                    type="radio"
                                    name="jobOrInternship"
                                    value="internship"
                                    className="mr-2 ml-4 leading-tight"
                                    checked={formData.jobOrInternship === 'internship'}
                                    onChange={handleChange}
                                />
                                <label htmlFor="internship" className="text-gray-500">Internship</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="closeAfter" className="block text-gray-500 text-sm font-bold mb-2">Close Job After (in days)</label>
                        <input
                            required
                            id="closeAfter"
                            type="number"
                            placeholder='Close Job After (in days)'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.closeAfter}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!formData.title || !formData.description || !formData.jobOrInternship || !formData.closeAfter}
                        className={`bg-blue-500 ${(!formData.title || !formData.description || !formData.jobOrInternship || !formData.closeAfter) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`}
                    >
                        Add Job/Internship
                    </button>
                </form>
            </div>
        </div>
    );
}

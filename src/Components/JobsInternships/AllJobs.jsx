import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJobInternship, showJobsInternships } from '../JobsInternshipSlice';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IoMdSend } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const dispatch = useDispatch();
    const { data: jobs, loading, error } = useSelector(state => state.jobsInternshipsStore);
    
    useEffect(() => {
        dispatch(showJobsInternships());
    }, [dispatch]);


    const formatDate = (dateString) => {
        const timestampInMilliseconds = dateString * 1000;
    
        const date = new Date(timestampInMilliseconds);
    
        // Get the year, month, and day
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month; 

        let day = date.getDate();
        day = day < 10 ? '0' + day : day; 
    
        // Format the date as 'YYYY-MM-DD'
        const formattedDate = `${year}-${month}-${day}`;
    
        // Get the current date
        const currentDate = new Date().toISOString().slice(0, 10);
    
        // Check if the date is today or yesterday
        if (formattedDate === currentDate) {
            return 'Today';
        } else if (formattedDate === new Date(Date.now() - 864e5).toISOString().slice(0, 10)) {
            return 'Yesterday';
        } else {
            return formattedDate;
        }
    };
    
    const handleDelete = (id) => {
        dispatch(deleteJobInternship(id));
    };


    return (
        <div className="font-[Chivo] h-full w-full">
            {loading && (
                <div className="flex items-center justify-center mt-10">
                    <div className="w-6 h-6 mr-3 border-t-2 border-b-2 border-gray-500 rounded-full animate-spin"></div>
                    <p className="text-secondary">Loading...</p>
                </div>
            )}
            {error && (
                <p className="text-center text-red-500 mt-3">
                    <span className="font-bold">Error:</span> {error}
                </p>
            )}
            {!loading && !error && jobs.length === 0 && (
                <p className="text-center mt-3">No jobs available.</p>
            )}
            {!loading && !error && jobs.length > 0 && (
                <>
                    <h1 className="py-10 text-center text-[#5F9BCE] text-4xl font-bold">All Jobs</h1>
                    <table className="min-w-full bg-white border rounded-lg">
                        <thead>
                            <tr>
                                <th className="border font-bold text-gray-700 text-left px-8 py-4">JOB TITLE</th>
                                <th className="border font-bold text-gray-700  text-left w-80 px-8 py-4">DESCRIPTION</th>
                                <th className="border text-left font-bold text-gray-700 px-8 py-4">Issue Date</th>
                                <th className="border text-left  font-bold text-gray-700 px-8 py-4">Job/Internship</th>
                                <th className="border text-left  font-bold text-gray-700 px-8 py-4">JOB STATUS</th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((item, id) => (
                                <tr key={id}>
                                    <td className="border text-gray-500 px-8 py-4">{item.title}</td>
                                    <td className="border text-gray-500 px-8 py-4">{item.description}</td>
                                    <td className="border text-gray-500 px-8 py-4">{formatDate(item.issue)}</td>
                                    <td className="border text-gray-500 px-8 py-4">{item.jobOrInternship}</td>
                                    <td className="border text-green-500 px-8 py-4">{item.status}</td>
                                  
                                    <td className='space-x-1 border text-gray-500 px-8 py-4 flex flex-row justify-center items-center'>
<button className="border-2 border-blue-400 rounded-full px-1 py-1 bg-blue-400 text-white hover:bg-white hover:text-blue-400">
    <Link to={`/MyeditJobs/${item.id}`}>
        <MdModeEdit />
    </Link>
</button>


<button className="border-2 border-blue-400 rounded-full px-1 py-1 bg-blue-400 text-white hover:bg-white hover:text-blue-400 " onClick={() => handleDelete(item.id)}>
<MdDelete />
</button>

<button className='border-2 border-blue-400 rounded-full px-1 py-1 bg-blue-400 text-white hover:bg-white hover:text-blue-400'>
    <IoMdSend/>
</button>

<button className='border-2 border-blue-400 rounded-full px-1 py-1 bg-blue-400 text-white hover:bg-white hover:text-blue-400'>
    <BsThreeDots/>
</button>





                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default AllJobs;

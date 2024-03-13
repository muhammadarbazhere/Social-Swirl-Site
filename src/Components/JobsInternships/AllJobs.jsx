import React from 'react';
import { useSelector } from 'react-redux';

const AllJobs = () => {
    const jobsData = useSelector(state => state.JobInternshipStore.data);

    return (
        <div className="font-[Chivo] h-full w-full">
            <h1 className="py-10 text-center text-[#5F9BCE] text-4xl font-bold">All Jobs</h1>
            <table className="min-w-full bg-white border rounded-lg">
                <thead>
                    <tr>
                        <th className="border text-white bg-[#5F9BCE] text-left px-8 py-4">JOB TITLE</th>
                        <th className="border text-white bg-[#5F9BCE] text-left w-80 px-8 py-4">DESCRIPTION</th>
                        <th className="border text-left bg-[#5F9BCE] text-white px-8 py-4">JOB TYPE</th>
                        <th className="border text-left bg-[#5F9BCE] text-white px-8 py-4">JOB STATUS</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {jobsData.map((item, id) => (
                        <tr key={id}>
                            <td className="border text-gray-500 px-8 py-4">{item.title}</td>
                            <td className="border text-gray-500 px-8 py-4">{item.description}</td>
                            <td className="border text-gray-500 px-8 py-4">{item.type}</td>
                            <td className="border text-green-500  px-8 py-4">{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;

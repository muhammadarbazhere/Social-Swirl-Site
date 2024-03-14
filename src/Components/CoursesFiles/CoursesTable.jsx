import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../CourseSlice';

const CoursesTable = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.app);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                await dispatch(showUser());
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div className="font-[Chivo] h-full w-full">
            <h1 className='py-10 text-center text-[#5F9BCE] text-4xl font-bold'>
                All Courses
                </h1>
            
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}
            
          
{users.length === 0 ? (
  <div className=" flex justify-center h-full mt-44">
    <p className='text-3xl text-center'> Please add courses...</p>
  </div>
) : (
                <table className="min-w-full bg-white border rounded-lg">
                    <thead>
                        <tr>
                            <th className="bg-[#5F9BCE] border text-white text-left px-8 py-4">Course Title</th>
                            <th className="bg-[#5F9BCE] border text-white text-left px-8 py-4">Category</th>
                            <th className="bg-[#5F9BCE] border text-white text-left w-80 px-8 py-4">Description</th>
                            <th className="bg-[#5F9BCE] border text-left text-white px-8 py-4">Status</th>
                            <th className="bg-[#5F9BCE] border text-left text-white px-8 py-4">Duration</th>
                            <th className="bg-[#5F9BCE] border text-white text-left px-8 py-4">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, id) => (
                            <tr key={id}>
                                <td className="border text-gray-500 px-8 py-4">{item.title}</td>
                                <td className="border text-gray-500 px-8 py-4">{item.category}</td>
                                <td className="border text-gray-500 px-8 py-4">{item.description}</td>
                                <td className="border text-green-500 px-8 py-4">Completed</td>
                                <td className="border text-gray-500 px-8 py-4">{item.duration}</td>
                                <td className="border text-gray-500 px-8 py-4">${item.charges}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CoursesTable;
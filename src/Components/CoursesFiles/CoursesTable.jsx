import React from 'react';
import { useSelector} from 'react-redux';

const CoursesTable = () => {
    const coursesData = useSelector(state => state.courseStore.data);
    console.log(coursesData)

  return (
    <div className=" font-[Chivo] h-full w-full ">
        <h1 className='py-10 text-center text-[#5F9BCE] text-4xl font-bold'>All Courses</h1>
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
          {coursesData && coursesData.map((item, id) => (
            <tr key={id}>
        <td className="border text-gray-500 px-8 py-4">{item.Title}</td>
        <td className="border text-gray-500 px-8 py-4">{item.Category}</td>
        <td className="border text-gray-500 px-8 py-4">{item.Description}</td>
        <td className="border text-green-500 px-8 py-4">Completed</td>
        <td className="border text-gray-500 px-8 py-4">{item.Duration}</td>
        <td className="border text-gray-500 px-8 py-4">$ {item.Charges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;

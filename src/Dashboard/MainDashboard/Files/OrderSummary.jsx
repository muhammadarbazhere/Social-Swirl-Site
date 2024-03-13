import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  return (
    <div className="flex font-[Chivo] justify-between items-center bg-white p-4">
      <div className="text-gray-800 text-sm">
        You are here:<span className="text-gray-600"> Home / Dashboard</span>
      </div>
      <Link to='/MySecondHome' className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      + ADD ITEMS
    </Link>
    </div>
  );
};

export default OrderSummary;

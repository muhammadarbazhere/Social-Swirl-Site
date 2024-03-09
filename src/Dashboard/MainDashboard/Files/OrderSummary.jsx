import React from 'react';

const OrderSummary = () => {
  return (
    <div className="flex  justify-between items-center bg-white p-4">
      <div className="text-gray-800 text-sm">
        You are here:<span className="text-gray-600"> Home / Dashboard</span>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        + ADD ITEMS
      </button>
    </div>
  );
};

export default OrderSummary;

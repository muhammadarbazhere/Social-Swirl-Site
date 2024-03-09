import React, { useState, useEffect } from 'react';
import { FaUsers, FaShoppingBag, FaCalendarCheck, FaDollarSign } from 'react-icons/fa';

const ProgressCards = () => {
  const [counts, setCounts] = useState({
    students: 0,
    rating: 0,
    completion: 0,
    earnings: 0,
  });

  useEffect(() => {
    const animateNumbers = () => {
      const counters = document.querySelectorAll('.count');
      const speed = 200;

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    };

    animateNumbers(); // Initial animation

    return () => {
      clearTimeout();
    };
  }, [counts]);

  useEffect(() => {
    const updatedCounts = {
      students: 10368,
      rating: 388668,
      completion: 1086,
      earnings: 1060386, // Update earnings value
    };
    setCounts(updatedCounts);
  }, []);

  return (
    <div className="flex flex-row w-full font-Chivo justify-around py-5 gap-3 text-xl">
      <div className="space-y-1 bg-white w-2/6 h-28 px-4 py-4">
        <p className="flex flex-col">
          <FaUsers className="text-blue-500 text-2xl" />
          <h1 className="count text-blue-500" data-target={counts.students}>
            0
          </h1>
          <h5 className="text-xs text-gray-400">MEMBERS ONLINE</h5>
        </p>
      </div>

      <div className="space-y-1 bg-white w-2/6 h-28 px-4 py-4">
        <p className="flex flex-col">
          <FaShoppingBag className="text-blue-500 text-2xl" />
          <h1 className="count text-blue-500" data-target={counts.rating}>
            0
          </h1>
          <h5 className="text-xs text-gray-400">ITEMS SOLD</h5>
        </p>
      </div>

      <div className="space-y-1 bg-white w-2/6 h-28 px-4 py-4">
        <p className="flex flex-col">
          <FaCalendarCheck className="text-blue-500 text-2xl" />
          <h1 className="count text-blue-500" data-target={counts.completion}>
            0
          </h1>
          <h5 className="text-xs text-gray-400">THIS WEEK</h5>
        </p>
      </div>

      <div className="space-y-1 bg-white w-2/6 h-28 px-4 py-4">
        <p className="flex flex-col">
          <FaDollarSign className="text-blue-500 text-2xl" />
          <h1 className="count text-blue-500" data-target={counts.earnings}>
            0
          </h1>
          <h5 className="text-xs text-gray-400">TOTAL EARNINGS</h5>
        </p>
      </div>
    </div>
  );
};

export default ProgressCards;

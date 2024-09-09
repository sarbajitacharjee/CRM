// components/StatsCard.js
import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      <p className="text-2xl font-semibold mt-3">{value}</p>
    </div>
  );
};

export default StatsCard;

// components/StatsContainer.js
import React from 'react';
import StatsCard from './StatsCard';

const StatsContainer = ({ timeFrame }) => {
  const stats = [
    { title: 'New Users', value: 1450 },
    { title: 'Revenue', value: '$32,500' },
    { title: 'Active Sessions', value: 765 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default StatsContainer;

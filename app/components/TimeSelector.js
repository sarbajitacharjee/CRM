// components/TimeSelector.js
import React from 'react';

const TimeSelector = ({ timeFrame, onChange }) => {
  const timeFrames = ['1d', '1w', '1m', '1y'];

  return (
    <div className="flex justify-center mb-6">
      {timeFrames.map((frame) => (
        <button
          key={frame}
          onClick={() => onChange(frame)}
          className={`px-4 py-2 mx-2 rounded-lg ${
            timeFrame === frame ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {frame.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;

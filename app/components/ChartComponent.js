// components/ChartComponent.js
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartComponent = ({ timeFrame }) => {
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'CRM Data Overview',
    },
    series: [
      {
        name: 'Values',
        data: [
          { name: 'Users', y: 61.41 },
          { name: 'Sessions', y: 11.84 },
          { name: 'Revenue', y: 10.85 },
        ],
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;

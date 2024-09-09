"use client";
import Head from 'next/head';
import { useState } from 'react';
import TimeSelector from './components/TimeSelector';
import StatsContainer from './components/StatsContainer';
import ChartComponent from './components/ChartComponent';

export default function StatisticsPage() {
  const [timeFrame, setTimeFrame] = useState('1d'); // Default 1 day timeframe

  const handleTimeChange = (newTimeFrame) => {
    setTimeFrame(newTimeFrame);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col">
      <Head>
        <title>CRM Statistics</title>
        <meta name="description" content="CRM Statistics Page" />
      </Head>
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight">CRM Statistics</h1>
      </header>
      <main className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border-t-4 border-blue-500 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <TimeSelector timeFrame={timeFrame} onChange={handleTimeChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <StatsContainer timeFrame={timeFrame} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-2 border-t-4 border-yellow-500 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <ChartComponent timeFrame={timeFrame} />
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 shadow-inner">
        <p>&copy; 2024 CRM Statistics. All rights reserved.</p>
      </footer>
    </div>
  );
}

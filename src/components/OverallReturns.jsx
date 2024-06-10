import React from 'react';
import '@fontsource/inter';
import up from '../assets/Vectord.svg';

const overallReturnsData = {
  returnPercentage: '14.0%',
  dailyPL: '+19.00 (0.23%)',
  currentInvestment: '2,100.0',
  investedAmount: '1,000.0',
};

function OverallReturns() {
  return (
    <div className="flex flex-row justify-between items-center w-[516px] mt-[25px] ml-[24px] font-sans bg-white border-2 border-blue-500 h-[124px] rounded-[8px] p-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Overall returns</h3>
              <div className='flex flex-row'>
                <p className="text-2xl font-semibold text-gray-900">{overallReturnsData.returnPercentage}</p>
                <img src={up} alt="" className="h-4 w-4 ml-3 mt-1" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">Day's P/L</p>
              <p className={`text-sm font-semibold ${overallReturnsData.dailyPL.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{overallReturnsData.dailyPL}</p>
            </div>
            <div className='felx flex-col space-y-2'>
              <p className="text-sm text-gray-500">Current</p>
              <p className="text-sm font-semibold text-gray-900">{overallReturnsData.currentInvestment}</p>
            </div>
            <div className='felx flex-col space-y-2'>
              <p className="text-sm text-gray-500">Invested</p>
              <p className="text-sm font-semibold text-gray-900">{overallReturnsData.investedAmount}</p>
            </div>
          </div>
  );
};

export default OverallReturns;

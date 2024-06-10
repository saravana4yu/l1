import React from 'react';
import '@fontsource/inter';
import down from '../assets/arrow-down.svg';
import up from '../assets/arrow-up.svg';

const topMovers = [
  { name: 'HDFCLIFE', change: '+11.47%', value: 20.05, cp: 482.75 },
  { name: 'RELIANCE', change: '+1.20%', value: 50.50, cp: 482.75 },
  { name: 'ICICIBANK', change: '-0.83%', value: 10.50, cp: 482.75 },
  { name: 'SBI', change: '-6.20%', value: 25.05, cp: 482.75 },
  { name: 'INFOSYS', change: '+11.85%', value: 80.30, cp: 482.75 },
  { name: 'WIPRO', change: '+11.05%', value: 30.50, cp: 482.75 },
  { name: 'JBM AUTO', change: '+10.55%', value: 50.55, cp: 482.75 },
];

function TopMovers() {
  return (
    <div className="flex flex-col w-[558px] mt-[22px] ml-[32px] font-sans">
      <div className='flex flex-row justify-between mb-2'>
        <p className='font-bold h-[28px] text-gray-700'>Top movers</p>
        <a href='#' className='text-blue-600'>See all</a>
      </div>
      <div className='bg-white h-[644px] rounded-lg'>
        <div className="flex flex-row space-x-2 h-[77px] ml-[12px] ">
          <button className="font-semibold bg-gray-100 text-blue-600 border-2 border-blue-600 rounded-3xl px-4 mt-5 mb-3">Top gainers</button>
          <button className="font-semibold bg-gray-100 text-gray-600 border-2 border-gray-600 rounded-3xl px-4 mt-5 mb-3">Top losers</button>
          <button className="font-semibold bg-gray-100 text-gray-600 border-2 border-gray-600 rounded-3xl px-4 mt-5 mb-3">Active by volume</button>
        </div>
        <div className="">
          <div className="flex flex-row bg-gray-100 justify-between h-[44px] pt-[10px] text-gray-500 border-t-2">
            <span className='w-[335px] pl-[16px]'>Stock</span>
            <span className='w-[110.5px]'>Change</span>
            <span className='w-[110.5px]'>Current Price</span>
          </div>
          {topMovers.map((topMover, i) => (
            <div key={i} className="flex flex-row h-[72px] pl-[16px] py-[24px] border-t-2">
              <p className="font-semibold text-gray-700 w-[210px]">{topMover.name}</p>
              <div className={`flex items-center w-[86px] mr-2 ${topMover.change.startsWith('+') ?  'bg-green-100 rounded-xl w-24 h-6' : ' bg-red-100 rounded-xl w-24'}`}>
                <img src={topMover.change.startsWith('+') ? up : down} alt="" className="h-3 w-3 mx-1" />
                <p className={`text-sm font-semibold ${topMover.change.startsWith('+') ? 'text-green-500 ' : 'text-red-600 bg-red-100'}`}>{topMover.change}</p>
              </div>
              <p className="font-semibold text-gray-500 w-[110.5px] ml-7">{topMover.value}</p>
              <p className="font-semibold text-gray-500 w-[110.5px] ml-3">{topMover.cp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMovers;

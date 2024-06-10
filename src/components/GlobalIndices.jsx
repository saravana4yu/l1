import React, { useState, useRef, useEffect } from 'react';
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import down from '../assets/Vector.svg';
import up from '../assets/Vectord.svg';
import '@fontsource/inter';

const indicesData = [
  { name: 'DOWJONES', value: '25,312', change: '+0.66%', history: [15050, 16060, 15070, 16010, 16070, 17010, 17050, 18080, 15010, 19050, 19180, 20130, 22450, 24990, 26789] },
  { name: 'S&P500', value: '25,312', change: '-0.66%', history: [39900, 37850, 37800, 37850, 37880, 37810, 34830, 33750, 31650, 30550, 37880, 30810, 29830, 28750, 26650, 24550] },
  { name: 'NASDAQ', value: '25,312', change: '+0.66%', history: [15050, 16060, 15070, 16010, 16070, 17010, 17050, 18080, 15010, 19050, 19180, 20130, 22450, 24990, 26789] },
  { name: 'FTSE', value: '25,312.50', change: '-0.05%', history: [39900, 37850, 37800, 37850, 37880, 37810, 34830, 33750, 31650, 30550, 37880, 30810, 29830, 28750, 26650, 24550] },
  { name: 'DOWJONES', value: '25,312.50', change: '+0.66%', history: [15050, 16060, 15070, 16010, 16070, 17010, 17050, 18080, 15010, 19050, 19180, 20130, 22450, 24990, 26789] },
  { name: 'S&P500', value: '25,312.50', change: '-0.66%', history: [39900, 37850, 37800, 37850, 37880, 37810, 34830, 33750, 31650, 30550, 37880, 30810, 29830, 28750, 26650, 24550] },
  { name: 'NASDAQ', value: '25,312.50', change: '+0.66%', history: [15050, 16060, 15070, 16010, 16070, 17010, 17050, 18080, 15010, 19050, 19180, 20130, 22450, 24990, 26789] },
  { name: 'FTSE', value: '25,312.50', change: '-0.05%', history: [39900, 37850, 37800, 37850, 37880, 37810, 34830, 33750, 31650, 30550, 37880, 30810, 29830, 28750, 26650, 24550] },
];

function GlobalIndices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const carouselRef = useRef(null);

  const updateTransform = (index) => {
    const width = carouselRef.current.clientWidth / itemsPerPage;
    carouselRef.current.scrollTo({
      left: index * width,
      behavior: 'smooth',
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - itemsPerPage, 0);
      updateTransform(newIndex);
      return newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.min(prevIndex + itemsPerPage, indicesData.length - itemsPerPage);
      updateTransform(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    updateTransform(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative flex flex-col w-[1128px] h-[205px] mt-[16px] ml-[16px] font-sans">
      <div className='flex flex-row justify-between mb-1 mx-[16px]'>
        <p className='font-bold h-[28px] text-gray-700'>Global Indices</p>
        <a href='#' className='text-blue-600'>See all</a>
      </div>
      <div className='relative bg-gray-200 mt-1 h-[169px] overflow-hidden'>
        <div
          ref={carouselRef}
          className="flex transition-transform bg-white duration-300 h-[169px] rounded-lg p-4 space-x-7 mx-[16px] overflow-hidden"
        >
          {indicesData.map((index, i) => (
            <div key={i} className="min-w-[242px] flex h-[140px] border-2 rounded-lg px-2 py-4 shadow-md">
              <div className='flex flex-col justify-between'>
                <h3 className="text-gray-500 font-semibold">{index.name}</h3>
                <p className="text-2xl font-bold">{index.value}</p>
                <div className={`flex items-center ${index.change.startsWith('+') ? 'bg-green-100 rounded-xl w-24 h-6' : ' bg-red-100 rounded-xl w-24 h-6'}`}>
                  <img src={index.change.startsWith('+') ? up : down} alt="" className="h-3 w-3 ml-2 mr-2" />
                  <p className={`text-sm font-semibold ${index.change.startsWith('+') ? 'text-green-600' : 'text-red-600 '}`}>
                    {index.change}
                  </p>
                </div>
              </div>
              <ResponsiveContainer className='mt-5' width="100%" height={70}>
                <AreaChart data={index.history.map((value, idx) => ({ idx, value }))}>
                  <defs>
                    <linearGradient id={`colorUv${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={index.change.startsWith('+') ? '#3fb494' : '#ff2f1c'} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={index.change.startsWith('+') ? '#3fb494' : '#ff2f1c'} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={index.change.startsWith('+') ? '#3fb494' : '#ff2f1c'}
                    fillOpacity={0.8}
                    fill={`url(#colorUv${i})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
        {currentIndex > 0 && (
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white p-2 shadow-lg rounded-full"
            >
              <TbChevronCompactLeft />
            </button>
          </div>
        )}
        {currentIndex < indicesData.length - itemsPerPage && (
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white p-2 shadow-lg rounded-full"
            >
              <TbChevronCompactRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalIndices;

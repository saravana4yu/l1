import React from 'react';
import '@fontsource/inter';
import down from '../assets/arrow-down.svg';
import up from '../assets/arrow-up.svg';

const currenciesData = [
  { name: 'USDINR', change: '+0.64%', expiry: '26 Apr', price: 82.1245 },
  { name: 'USDINR', change: '+0.17%', expiry: '26 May', price: 82.1659 },
  { name: 'GBPINR', change: '-0.23%', expiry: '20 Apr', price: 101.7987 },
  { name: 'GBPINR', change: '-0.23%', expiry: '26 Apr', price: 102.4534 },
  { name: 'EURINR', change: '+0.53%', expiry: '26 Apr', price: 80.4545 },
];

function Commodities() {
  return (
    <div className="flex flex-col w-[516px] mt-[19px] ml-[28px] font-sans">
      <div className='flex flex-row justify-between mb-2'>
        <p className='font-bold h-[28px] text-gray-700'>Currencies & Commodities</p>
        <a href='#' className='text-blue-600'>See all</a>
      </div>
      <div className='bg-white h-[498px] rounded-lg'>
        <div className="flex flex-row h-[77px] ml-[12px] space-x-2">
          <button className="font-semibold bg-gray-100 text-blue-600 border-2 border-blue-600 rounded-3xl px-4 mt-5 mb-3">Currencies</button>
          <button className="font-semibold bg-gray-100 text-gray-600 border-2 border-gray-600 rounded-3xl px-4 mt-5 mb-3">Commodities</button>
        </div>
        <div className="">
          <div className="flex flex-row justify-between h-[44px] bg-gray-100 border-t-2 border-gray-200 text-gray-500 pl-[16px] pt-[10px]">
            <span className='w-[139.33px]'>Stock</span>
            <span className='w-[98px]'>Change</span>
            <span className='w-[139.33px]'>Expiry</span>
            <span className='w-[139.33px]'>Current Price</span>
          </div>
          {currenciesData.map((currency, i) => (
            <div key={i} className="flex flex-row justify-between items-center h-[72px] pl-[16px] border-t-2 border-gray-200 pb-2">
              <p className="font-semibold text-gray-700 w-[139.33px]">{currency.name}</p>
              <div className={`flex items-center w-[86px] mr-2 ${currency.change.startsWith('+') ?  'bg-green-100 rounded-xl w-24 h-6' : ' bg-red-100 rounded-xl w-24'}`}>
                <img src={currency.change.includes('+') ? up : down} alt="" className="h-3 w-3 mx-1" />
                <p className={`text-sm font-semibold ${currency.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {currency.change}
                </p>
              </div>
              <p className="font-semibold text-gray-500 w-[139.33px] ml-5">{currency.expiry}</p>
              <p className="font-semibold text-gray-500 w-[139.33px] ml-5">{currency.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commodities;

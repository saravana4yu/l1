import React from 'react';
import activity from '../assets/activity.svg'
import document from '../assets/document-text.svg'
import bag from '../assets/bag.svg'
import info from '../assets/info-circle.svg'
import '@fontsource/inter';

const optionsData = [
  {
    title: 'IPO',
    description: 'Apply for companies that are yet to be listed on stock exchange.',
    icon: activity,
  },
  {
    title: 'NFO',
    description: 'Invest in new funds that are to be launched by the asset management company.',
    icon: document,
  },
  {
    title: 'Basket order',
    description: 'Create stock baskets and invest in the companies through SIP.',
    icon: bag,
  },
  {
    title: 'Alert',
    description: 'Get notifications based on customized price alerts and never miss any opportunity.',
    icon: info,
  },
];

function Options() {
  return (
    <div className="flex flex-row bg-white w-[1096px] h-[161px] mt-[25px] ml-[32px] rounded-lg space-x-4">
      {optionsData.map((option, index) => (
        <div key={index} className="flex flex-col max-w-[254px] min-w-[254px]  bg-white h-[132px] border-2 rounded-lg ml-4 mt-4 p-4 shadow-md">
          <div className='flex flex-row space-x-2'>
            <img src={option.icon} alt={`${option.title} icon`} className="w-5 h-5 mt-0.5"/>
            <h3 className="font-bold text-gray-700 mb-2">{option.title}</h3>
          </div>
          <p className="text-sm text-gray-500">{option.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;

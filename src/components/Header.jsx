import React from "react";
import '@fontsource/inter';
import collapse from '../assets/Collapse.svg'
import search from '../assets/search-normal.svg';
import notification from '../assets/notification-bing.svg';
import avatar from '../assets/Avatar.jpg';

function Header() {
  return (

    <div className="flex flex-row justify-between font-sans bg-white shadow-md h-[80px] w-[1161px] px-5 items-center fixed top-0 z-10">
      <img src={collapse} alt="search" className="absolute left-0 -ml-9 top-0 mt-6 cursor-pointer" />
      <div className="relative w-1/3 ml-3">
        <img src={search} alt="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search for stocks & more"
          className="font-josefin-sans pl-10 pr-4 py-2 bg-gray-100 w-full rounded-xl focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <img src={notification} alt="notification" className="my-3 mx-2 w-12 h-12 bg-gray-100 text-gray-700 rounded-full p-2" />
        <img className="w-12 h-12 rounded-full m-4" src={avatar} alt="Rounded avatar" />
        <div className="flex flex-col items-start mr-4">
          <p>Anna</p>
          <p className="text-gray-700">anna@tandemloop.in</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

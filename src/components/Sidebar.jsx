import React, { useState } from "react";
import '@fontsource/inter';
import Logo from '../assets/Logomark.svg';
import text from '../assets/Logotype.svg';
import icon from '../assets/Icon.svg'
import { TbFileDownload, TbMoneybag, TbLogout, TbDotsCircleHorizontal, TbMessageCircleQuestion, TbSettings2, TbBookmarkPlus, TbChartPie, TbCategoryFilled, TbClipboard, TbChevronCompactDown, TbChevronCompactUp, TbChevronCompactRight } from "react-icons/tb";
import { PiCaretRight, PiCaretUp, PiCaretDown } from "react-icons/pi";

function Sidebar() {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [index]: !prevDropdowns[index],
    }));
  };

  const mainMenus = [
    {
      label: "Home",
      icon: <TbCategoryFilled />,
      href: "#",
      dropdown: true,
      active: true,
      items: [
        { label: "Dashboard", active: true, href: "#" },
        { label: "Screeners", href: "#" },
      ],
    },
    { label: "Watchlist", icon: <TbBookmarkPlus />, href: "#", active: false },
    {
      label: "Portfolio", icon: <TbChartPie />, href: "#", dropdown: true, active: false, items: [
        { label: "Portfolio", href: "#" },
      ],
    },
    {
      label: "Mutual funds", icon: <TbMoneybag />, href: "#", dropdown: true, active: false, items: [
        { label: "Funds", href: "#" },
      ],
    },
    { label: "Order", icon: <TbClipboard />, href: "#", active: false },
    { label: "Basket Order", icon: <TbDotsCircleHorizontal />, href: "#", active: false },
    { label: "Research report", icon: <TbFileDownload />, href: "#", active: false },
  ];

  const supports = [
    { label: "Settings", icon: <TbSettings2 />, href: "#", active: false },
    { label: "FAQs", icon: <TbMessageCircleQuestion />, href: "#", active: false },
  ];

  return (
    <div className="bg-white h-[880px] w-[280px] font-sans flex flex-col">
      <div className="flex flex-row items-start pl-3 py-6 space-x-4 bg-white shadow-md h-[80px] w-[280px] fixed top-0 z-10">
        <img src={Logo} alt={`icon`} className="w-[32px] h-[32px] mt-0.5"/>
        <img src={text} alt={`icon`} className="w-[84px] h-[32] mt-0.5"/>
      </div>
      <div className="mt-20 flex-1 scrollbar-thumb-custom overflow-y-scroll">
        <a href="#">
          <div className="flex flex-row justify-between font-bold rounded-lg border-2 border-blue-600 m-4 p-2">
            <div className="flex flex-row items-center">
              <img src={icon} alt={`icon`} className="w-[32px] h-[32px] ml-2 mr-4" />
              <div className="flex flex-col ">
                <p className="text-gray-500">Wallet</p>
                <p>₹ 51,000</p>
              </div>
            </div>
            <PiCaretRight className="mt-4 mr-2 text-2xl text-gray-500" />
          </div>
        </a>
        <div className="relative flex flex-col px-6 py-3">
          <div className="text-sm pb-4 font-bold text-gray-400">MAIN MENU</div>
          <nav className="flex flex-col font-bold text-lg text-gray-500 items-start w-full space-y-4">
            {mainMenus.map((menu, index) => (
              <div key={index} className="w-full">
                {menu.dropdown ? (
                  <div className="relative w-full">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center justify-between w-[244px] p-2 rounded-lg ${menu.active ? 'text-blue-600 bg-blue-100' : ''}`}
                    >
                      <div className="flex items-center text-3xl  space-x-4">
                        {menu.icon}
                        <span className="text-lg">{menu.label}</span>
                      </div>
                      {dropdowns[index] ? (
                        <PiCaretUp className="mr-4 text-2xl transform transition-transform duration-200" />
                      ) : (
                        <PiCaretDown className="mr-4 text-2xl transform transition-transform duration-200" />
                      )}
                    </button>
                    {dropdowns[index] && (
                      <div className="flex flex-col items-start w-full mt-4 space-y-4 py-0">
                        {menu.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className={`flex items-center space-x-4 w-[244px] py-2 pl-14 rounded-lg ${subItem.active ? 'text-blue-600 bg-blue-100' : ''}`}
                          >
                            <span className="text-lg">{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={menu.href}
                    className={`flex items-center space-x-4 w-[244px] p-2 rounded-lg ${menu.active ? 'text-blue-600 bg-blue-100' : ''}`}
                  >
                    <span className="text-3xl">{menu.icon}</span>
                    <span className="text-lg">{menu.label}</span>
                  </a>
                )}
              </div>
            ))}
          </nav>
          <div className="text-sm pt-6 pb-4 font-bold text-gray-400">SUPPORT</div>
          <nav className="flex flex-col font-bold text-lg text-gray-500 items-start w-full space-y-4">
            {supports.map((support, index) => (
              <div key={index} className="w-full">
                <a
                  href={support.href}
                  className={`flex items-center space-x-4 w-full p-2 rounded-lg ${support.active ? 'bg-blue-100' : ''}`}
                >
                  <span className="text-3xl">{support.icon}</span>
                  <span className="text-lg">{support.label}</span>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <hr className="mx-4 mb-5" />
      <a href="#">
        <div className="absolute p-5 flex flex-row items-start space-x-4">
          <TbLogout className="text-red-500 text-3xl ml-1" />
          <p className="font-sans font-bold text-lg text-red-500">Log out</p>
        </div>
      </a>
    </div>
  );
}

export default Sidebar;

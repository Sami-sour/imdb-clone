import React, { useContext } from 'react';
import themeImage from "../assets/paint-palette-removebg-preview.png"
import { FaSun } from "react-icons/fa6";
import { ThemeContext } from '../store/ThemeContext';
import { FaMoon } from "react-icons/fa";

const NavBar = () => {
 
  const {dark, toggle} = useContext(ThemeContext);

  return (
    
      <div className={`${dark ? "bg-white border-b border-black" : "bg-gray-800 border-b border-gray-600"} flex  p-3 justify-between items-center fixed w-full`}>
        <div className='flex items-center gap-2 '>
            <div>
                <img src={themeImage} alt="theme-image" className='w-10'/>
            </div>
            <div className={` text-2xl  ${dark ? "text-black" : "text-white" }`}>ThemeApp</div>
        </div>
        <div 
        className='flex items-center gap-1 border border-gray-700 pt-3 pb-3 pl-5 pr-5 rounded-3xl cursor-pointer bg-gray-900'
         onClick={toggle}
        >
          <div  className='inline mr-2 text-yellow-300 text-[16px]'>{dark ? <FaMoon /> : <FaSun/>}</div>
          <div className='text-md text-yellow-300'>{dark ? "Dark Mode" : "Light Mode"}</div>
        </div>
      </div>
    
  )
}

export default NavBar
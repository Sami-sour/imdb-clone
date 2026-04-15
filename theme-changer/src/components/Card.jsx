import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';


const Card = ({icon, title, desc}) => {
    
    const {dark } = useContext(ThemeContext);

    return <div className={`p-3 rounded-2xl ${dark ? "bg-white border border-gray-700 m-2" : "bg-[#292929a3] border border-gray-700 m-2"}`}>
        <div  className='text-3xl text-blue-400'>{icon}</div>
        <div className={`mt-1 font-bold  ${dark ? "text-black": "text-white"}`}>{title}</div>
        <div className={`mt-1 ${dark ? "text-black" : 'text-gray-500 '}`}>{desc}</div>
    </div>
}

export default Card
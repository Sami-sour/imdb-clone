import React, { useContext } from 'react'
import NavBar from './NavBar'
import yellowMoon from "../assets/Cute_Yellow_Moon_PNG_Clipart_Picture-removebg-preview.png"
import Badge from './Badge'
import Card from './Card'
import { GiBrain } from "react-icons/gi";
import { MdOutlineSdStorage } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { ThemeContext } from '../store/ThemeContext'
import sunImage from "../assets/sun-image-removebg-preview.png"

const MainPage = () => {

    const {dark, toggle} = useContext(ThemeContext);

   return <>
   <div className={` min-h-screen transition-colors duration-500 ease-in-out ${dark ? "bg-white text-black" : "bg-gray-950 text-white"}`}>  
   <NavBar/>

   <main className='max-w-2xl mx-auto px-4 py-12 '>

      {/* Hero  */}

        <div>
         <div className='text-center pt-20 transition-all duration-500'>
            <div className='place-items-center'><img src={dark ?  sunImage : yellowMoon} alt="mooonImage" className='w-35'/></div>
            <div className='text-3xl mt-2 font-medium'>{dark ? "Light Mode is ON" : "Dark Mode is ON"}</div>
            <div className='mt-2 text-gray-500'>Your preference is saved automatically and will persist after reload.</div>
            <button className='mt-4 pl-4 pr-4 pt-2 pb-2 rounded-3xl bg-yellow-400 text-black shadow-[0px_0px_10px_yellow] cursor-pointer transition-all duration-300 hover:scale-105' onClick={toggle}>{dark ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
         </div>

        </div>

         <div className='flex flex-wrap gap-2 justify-center mb-10 mt-8'>
         <Badge label="React Context API" color="blue"/>
         <Badge label="useState" color="green"/>
         <Badge label="useEffect" color="yellow"/>
         <Badge label="local Storage" color="pink"/>
         </div>

         {/* Card  */}

         <div className='grid grid-cols-2'>
            <Card 
              icon={<GiBrain/>}
              title="Context API"
              desc="Theme state lives in ThemeContext and is accessible by any component without prop drilling"
            />

            <Card 
              icon={<MdOutlineSdStorage />}
              title="localStorage"
              desc="Your chosen theme is saved to localStorage and restored on every page reload automatically."
            />

            <Card 
              icon={<MdOutlineColorLens />}
              title="Smooth Transitions"
              desc="Every color change uses Tailwind's transition-colors with a 300ms duration for a polished feel."
            />

            <Card 
              icon={<IoSettings />}
              title="System Default"
              desc="On first visit, the app detects your OS-level preference using prefers-color-scheme."
            />
         </div>

         {/* Theme  */}

         <div className={`p-3 rounded-2xl m-2 border border-gray-700  transition-colors duration-500 ${dark ? "bg-white" : "bg-[#292929a3]"} `}  >Current theme: <span className={`${dark ? "text-yellow-600" : "text-yellow-300"}`}>🌙 Dark. </span>Stored in localStorage: <span className={`${dark ? "text-yellow-600" : "text-yellow-300"}`}>theme = "dark"</span></div>
   </main>
</div>
</>
}

export default MainPage
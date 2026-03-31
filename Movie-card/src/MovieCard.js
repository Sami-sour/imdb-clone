import React from 'react';
import { FaStar } from "react-icons/fa";

const MovieCard = ({movie}) => {
        return<>
        <div className='border border-gray-700 rounded-xl shadow-[0_4px_12px_rgba(128,128,128,0.4)] hover:-translate-y-3 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"'>
        <div><img src={movie.poster} alt="The Dark Knight" className='w-[15rem] h-[17rem] rounded-t-xl'/></div>
                <div className='p-2'>
                <div className='text-2xl mt-2'>{movie.title}</div>
                <div className='flex justify-between text-xl mt-4'>
                    <div>{movie.year}</div>
                    <div className='flex items-center gap-1'>
                    <div className='text-yellow-400'><FaStar /></div>
                    <div>{movie.rating}</div>
                    </div>
                </div>
                </div>
                </div>
                </>

  
  
};




export default MovieCard
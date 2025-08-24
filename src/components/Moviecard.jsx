import React, { useContext } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa";
import { Watchlistcontext } from '../context/Watchlistcontext';



const Moviecard = ({movie}) => {
   const {togglewatchlist,watchlist}= useContext(Watchlistcontext);

   const inwatchlist =watchlist.some((m)=>m.id==movie.id);
  return (
    <div className='bg-gray-800 p-4 rounded-lg text-white relative '>
      <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
       alt={movie.title} 
       className='w-full h-80 object-contain rounded-sm'/>
      <h3 className='text-lg font-bold mt-4'>{movie.title}</h3>
      <p className='text-sm text-gray-400'>{movie.release_date}</p>
  
      <button className='text-red-500 absolute top-2 right-2 text-xl' onClick={()=>togglewatchlist(movie)}>
        {inwatchlist? <FaHeart/>:<FaRegHeart/>}</button> 
    </div>
  )
};

export default Moviecard

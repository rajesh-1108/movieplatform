import React from 'react'
import Generefilter from '../components/Generefilter'
import Moviecard from '../components/Moviecard';
import { useContext } from 'react';
import { Watchlistcontext } from '../context/Watchlistcontext';
import { useState } from 'react';




const Watchlist = () => {
  const {watchlist,genrelist}=useContext(Watchlistcontext);

   const[search,setsearch]=useState("");
   const[selectedgenre,setselectedgenre]=useState("");

  const filterdmovies =watchlist.filter((movie)=> 
    movie.title.toLowerCase().includes(search.toLowerCase())
  
  )
  .filter(movie=>{
    return !selectedgenre||movie.genre_ids.includes(Number(selectedgenre));
  });
 
  return (
  <div className='p-4 pt-20'>
      <input className='p-2 w-3/4  border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-20  left-1/2 -translate-x-1/2 z-10' type='text' placeholder='search'
      onChange={(e)=>setsearch(e.target.value)}
      ></input>
     <div className='mt-20 flex justify-center'>
        <Generefilter genrelist={genrelist} setselectedgenre={setselectedgenre}/>
      </div>
      <div className='movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20'>
        {filterdmovies.map((movie)=>{
          return  <Moviecard key={movie.id} movie={movie}/>;
        })}
          </div>
      </div>
      
  )
}

export default Watchlist


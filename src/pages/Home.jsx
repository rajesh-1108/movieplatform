import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'



const Home = () => {
  const[movies,setmovies]=useState([]);
  const[page,setpage]=useState(1);
  const[search,setsearch]=useState("");
  

  useEffect(()=>{
    
    let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=38ee0a9d3a30dc9c261c8646e844f9c2`;
    if(search){
          url=`https://api.themoviedb.org/3/search/movie?query=${search}}&api_key=38ee0a9d3a30dc9c261c8646e844f9c2`;


    }
    
    fetch(url)
    .then((response)=>response.json())
    .then((data)=> setmovies(data.results));
  }),[page,setsearch]
  return (
    <div className='p-4 pt-20'>
      <input className='p-2 w-3/4  border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-20  left-1/2 -translate-x-1/2 z-10' type='text' placeholder="name" onChange={(e)=>setsearch(e.target.value)}></input>
      <div className='movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20'>
        {movies.map((movie)=>{
          return  <Moviecard key={movie.id} movie={movie}/>;
        })}
          </div>
      <div className='pageination-container flex justify-between mt-5'>
        <button 
        disabled={page==1}
        className='p-2 bg-gray-700 text-white rounded' onClick={
          ()=>{
            setpage((prev)=>prev-1)
            console.log(prev);
          }
        }>PREV</button>
        <button className='p-2 bg-gray-700 text-white rounded'onClick={
          ()=>{
            setpage((prev)=>prev+1)
            //console.log(prev);
          }
        }>NEXT</button>
        
      </div>
    </div>
  )
}

export default Home

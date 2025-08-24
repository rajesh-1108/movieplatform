import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Watchlistcontext } from '../context/Watchlistcontext';

const Navbar = () => {
  const {watchlist}=useContext(Watchlistcontext);
  return (
    
   
    <nav className="z-10 bg-gray-900 p-4  text-white flex justify-between fixed w-full top-0">
      <Link to="/" className='text-2xl font-bold'>Movie App</Link>
      <Link to="/Watchlist" className='text-xl font-bold'>Watchlist({watchlist.length})</Link>
    </nav>
   
  );
};

export default Navbar;

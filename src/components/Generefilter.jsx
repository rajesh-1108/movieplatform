import React from 'react'

const Generefilter = ({genrelist,setselectedgenre}) => {
  return (
    <div>
      <select className='p-2 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white border rounded mb-2' onChange={(e)=>setselectedgenre(e.target.value)}>
        
         <option value="">All genre</option>
        {genrelist.map((genre)=>{
          return(
           
            <option key={genre} value={genre.id}>{genre.name}</option>
          );
        })}
      </select>
    </div>
  )
}

export default Generefilter

import { Children, createContext, useContext, useState ,useEffect} from "react";

export const Watchlistcontext=createContext();

export const WatchlistProvider=({children})=>{
    const [watchlist,setwatchlist]=useState([]);
    const[genrelist,setgenrelist]=useState([]);

     useEffect(()=>{
        
        let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=38ee0a9d3a30dc9c261c8646e844f9c2`;
        
        
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> setgenrelist(data.genres||[]));
      },[]);


    

    const togglewatchlist =(movie)=>{
         const index=watchlist.findIndex((m)=>m.id===movie.id);

         if(index===-1)
         {
            setwatchlist([...watchlist,movie]);
         }
         else
         {
            setwatchlist([...watchlist.slice(0,index),...watchlist.slice(index+1)]);
         }
    };
    console.log("watch",watchlist)
    return(
        <Watchlistcontext.Provider value={{watchlist,togglewatchlist,genrelist}}>
            {children}

        </Watchlistcontext.Provider>
    );
};

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MovieCard from '../components/movieCard';

export default function SearchMovie() {
  const [movies,setMovies]=useState([])
  const location=useLocation();
  useEffect(()=>{
    setMovies(location.state.result.results)
    console.log(movies)
  },[])
  
  if(movies){
    return (
         <div className='w-full h-full relative '>
            <div className='flex   w-screen ml-14 flex-wrap  '>
            {movies && movies.map((movie)=>(
                <div className='my-4'> 
                <MovieCard  key={movie.id} value={movie}/>
                </div>
            ))}      
            </div>
        
         </div>
     )
    }else{
    return <><h1>loading....</h1></>

    }
  
}

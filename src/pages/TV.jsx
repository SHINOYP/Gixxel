import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import  {SET_GENRE} from '../store';
import MovieCard from '../components/movieCard'
import Pagination from '@mui/material/Pagination';

export default function movies() {
    const [loading,setLoading]=useState(false)
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const location = useLocation();
    const myProp = location.state?.myProp;
 
    useEffect(()=>{
        setLoading(true)
        console.log(myProp)
            
        const fetchSomething=async()=>{
            const response=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=af303dcb7ba62163922f8128770e6c9a&with_genres=${myProp}&page=${currentPage}`,
            {method:'GET'})
            const result=await response.json()
            console.log(result)
            setMovies(result.results);
            setTotalPages(result.total_pages);
        }   
        fetchSomething();
   
        setLoading(false)
    },[currentPage])


    const handlePaginationChange = (event, value) => {
     setCurrentPage(value);
   };

    if(movies){
          
          // console.log(loading)
          // console.log(dicover.results)
          return (
               <div className='w-full h-full relative '>
               <div className='flex   w-screen ml-14 flex-wrap  '>
               {movies && movies.map((movie)=>(
                   <div className='mx-8 my-4'> 
                  <MovieCard  key={movie.id} value={movie}/>
                  </div>
               ))}   
                    
                     
               </div>
               <div className='flex w-screen  ' > 
                      <Pagination className=' w-full mx-auto bg-white  h-8  transparent items-center rounded-xl' count={100} page={currentPage} style={{width:'359px'}} onChange={handlePaginationChange}  color="primary"/> 
                    </div>
               </div>
           )
                 
         

    }else{
     return <><h1>loading....</h1></>
    
  }
}

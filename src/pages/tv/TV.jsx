import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import  {SET_GENRE} from '../../store';
import MovieCard from '../../components/movieCard/movieCard'
import Pagination from '@mui/material/Pagination';
import './tvStyle.sass'

export default function movies() {
    const [loading,setLoading]=useState(false)
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const location = useLocation();
    const myProp = location.state?.myProp;
 
    useEffect(()=>{
        setLoading(true)
       
            
        const fetchSomething=async()=>{
            const response=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=af303dcb7ba62163922f8128770e6c9a&with_genres=${myProp}&page=${currentPage}`,
            {method:'GET'})
            const result=await response.json()
           
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
          return (
               <div className='tv-'>
               <div className='tv-main  '>
               {movies && movies.map((movie)=>(
                   <div className='tv-card-contain'> 
                  <MovieCard  key={movie.id} value={movie}/>
                  </div>
               ))}      
               </div>
               <div className='tv-page-contain ' > 
                      <Pagination className='tv-page-component' count={100} page={currentPage} style={{width:'359px'}} onChange={handlePaginationChange}  color="primary"/> 
                    </div>
               </div>
           )
    }else{
     return <><h1>loading....</h1></>
    
  }
}

import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch,useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation,FreeMode } from "swiper";
import MovieCard from './movieCard';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";




export default function tvshow() {
  const tvDiscover=useSelector((state)=>state.tv.value)
   
 
  if(tvDiscover){
  const movies=tvDiscover.results;
  return (
    <div>
          <Swiper
                          slidesPerView={3}
                          spaceBetween={-1000}
                          freeMode={true}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[FreeMode, Pagination]}
                          className="mySwiper mx-0 h-full  w-screen  "
                          
                          >
                           {movies && movies.map((movies)=>(
                            <SwiperSlide key={movies.id} >
                              <MovieCard key={movies.id} value={movies}/>
                            </SwiperSlide>   
                          ))} 
                        
                        </Swiper>
                    
    </div>

  )}
  else{
    return <div> <h1>loading</h1></div>
  }
}

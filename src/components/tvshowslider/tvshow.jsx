import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch,useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation,FreeMode } from "swiper";
import MovieCard from '../movieCard/movieCard';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import './tvshowsliderStyle.sass'



export default function tvshow() {
  const tvDiscover=useSelector((state)=>state.tv.value)
   
 
  if(tvDiscover){
  const movies=tvDiscover.results;
  return (
    <div>
          <Swiper
                        slidesPerView={2}
                          breakpoints={{
                            0: {
                              spaceBetween:300,
                            },
                            400:{
                              spaceBetween:200,
                            },
                            639: {
                              spaceBetween:-100,
                            },
                            865:{
                              spaceBetween:-400,
                            },
                            1000:{
                              spaceBetween:-400,
                            },
                            1200:{
                              spaceBetween:-800,
                            },
                            1500:{
                              spaceBetween:-900,
                            },
                            1700:{
                              spaceBetween:-1300,
                            },
                            2000:{
                              spaceBetween:-1900,
                            }

                          }}
                          freeMode={true}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[FreeMode, Pagination]}
                          className="mySwiper  "
                          
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
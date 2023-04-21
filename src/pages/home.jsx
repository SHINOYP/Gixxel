import React, { useEffect,useState } from 'react';
import MovieCard from '../components/movieCard';
import {useDispatch,useSelector} from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import Tv from '../components/tvshow'
import {SET_TV} from '../store'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation,FreeMode } from "swiper";
import Footer from '../components/Footer/Footer'
import Rating from '@mui/material/Rating';
import SearchBar from '../components/SearchBar';

const home = () => {
    const IMG_URL=import.meta.env.VITE_IMG_URI;
    const dispatch=useDispatch();
    const dicover=useSelector((state)=>state.movie.value)
    const hmmovie=useSelector((state)=>state.hmmovie.value)

    useEffect(()=>{
      const fetchTvShow=async()=>{
        const response=await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=af303dcb7ba62163922f8128770e6c9a",
        {method:"GET"})
        const result=await response.json()
        dispatch(SET_TV(result))
        return result;
    }
    fetchTvShow();
    },[dispatch])

    
  const movies=dicover.results
    
    console.log(hmmovie)
    return (
        
        <div className='relative h-full'>
            <div className='text-xl  w-screen flex ' >
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
              
                >
                    console.log(movies)
                <SwiperSlide >
                    <img src={IMG_URL+dicover.results[0].backdrop_path } />
                    <h1 className='absolute top-80 max-w-lg text-4xl font-semibold leading-normal text-gray-900 dark:text-white left-40 backdrop-blur-sm '>{dicover.results[0].title}</h1>
                    <span className='text-left   text-base top-96 absolute left-40  backdrop-blur-sm font-bold'>{dicover.results[0].release_date} | </span>
                    <span className='text-left   text-base top-96 absolute left-64  backdrop-blur-sm font-bold'>{dicover.results[0].original_language} </span>
                    <Rating name="movie-rating" className=' relative  backdrop-blur-sm' style={{top:'-265px',left:'300px'}} value={ dicover.results[0].vote_average/2} precision={0.5} readOnly />
                    <p className='text-sm  w-2/4 relative' style={{top:'-250px',left:'160px'}}>{dicover.results[0].overview}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG_URL+dicover.results[1].backdrop_path }/>
                    <h1 className='absolute top-80 max-w-lg text-4xl font-semibold leading-normal text-gray-900 dark:text-white left-40 backdrop-blur-sm '>{dicover.results[1].title}</h1>
                    <span className='text-left   text-base top-96 absolute left-40  backdrop-blur-sm font-bold'>{dicover.results[1].release_date} |</span>
                    <span className='text-left   text-base top-96 absolute left-64  backdrop-blur-sm font-bold'>{dicover.results[1].original_language} </span>
                    <Rating name="movie-rating" className=' relative backdrop-blur-sm' style={{top:'-265px',left:'300px'}} value={ dicover.results[1].vote_average/2} precision={0.5} readOnly />
                    <p className='text-sm  w-2/4 relative' style={{top:'-250px',left:'160px'}}>{dicover.results[0].overview}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG_URL+dicover.results[2].backdrop_path } />
                    <h1 className='absolute top-80 max-w-lg text-4xl font-semibold leading-normal text-gray-900 dark:text-white left-40  backdrop-blur-sm'>{dicover.results[2].title}</h1>
                    <span className='text-left   text-base top-96 absolute left-40  backdrop-blur-sm font-bold'>{dicover.results[2].release_date} |</span>
                    <span className='text-left   text-base top-96 absolute left-64  backdrop-blur-sm font-bold'>{dicover.results[2].original_language} </span>
                    <Rating name="movie-rating" className=' relative  backdrop-blur-sm' style={{top:'-265px',left:'300px'}} value={ dicover.results[2].vote_average/2} precision={0.5} readOnly />
                    <p className='text-sm  w-2/4 relative' style={{top:'-250px',left:'160px'}}>{dicover.results[0].overview}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG_URL+dicover.results[3].backdrop_path } />
                    <h1 className='absolute top-80 max-w-lg text-4xl font-semibold leading-normal text-gray-900 dark:text-white left-40  backdrop-blur-sm'>{dicover.results[3].title}</h1>
                    <span className='text-left  text-base top-96 absolute left-40  backdrop-blur-sm font-bold'>{dicover.results[3].release_date} |</span>
                    <span className='text-left   text-base top-96 absolute left-64 backdrop-blur-sm font-bold'>{dicover.results[3].original_language} </span>
                    <Rating name="movie-rating  " className=' relative backdrop-blur-sm' style={{top:'-265px',left:'300px'}} value={ dicover.results[3].vote_average/2} precision={0.5} readOnly />
                    <p className='text-sm  w-2/4 relative' style={{top:'-250px',left:'160px'}}>{dicover.results[0].overview}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={IMG_URL+dicover.results[4].backdrop_path } />
                    <h1 className='absolute top-80 max-w-lg text-4xl font-semibold leading-normal text-gray-900 dark:text-white left-40  backdrop-blur-sm'>{dicover.results[4].title}</h1>
                    <span className='text-left   text-base top-96 absolute left-40  backdrop-blur-sm font-bold'>{dicover.results[4].release_date} |</span>
                    <span className='text-left   text-base top-96 absolute left-64  backdrop-blur-sm font-bold'>{dicover.results[4].original_language} </span>
                    <Rating name="movie-rating" className=' relative  backdrop-blur-sm' style={{top:'-265px',left:'300px'}} value={ dicover.results[4].vote_average/2} precision={0.5} readOnly />
                    <p className='text-sm  w-2/4 relative' style={{top:'-250px',left:'160px'}}>{dicover.results[0].overview}</p>
                </SwiperSlide>
              </Swiper>
              <SearchBar/>
            </div>
         
            <div className='ml-14 '>
                <div className='w-full flex h-14'>
                    <h1 className='my-auto ml-10 text-xl'>Trending</h1>
                </div>
                <div className='mt-2 lg:flex hidden'>
                      <Swiper
                          slidesPerView={3}
                          freeMode={true}
                          spaceBetween={-1000}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[FreeMode, Pagination]}
                          className="mySwiper mx-0 h-full flex  w-screen  "
                          
                          >
                           {movies && movies.map((movies)=>(
                            <SwiperSlide key={movies.id} >
                              <MovieCard key={movies.id} value={movies}/>
                            </SwiperSlide>   
                          ))} 
                          
                        
                      </Swiper>
                </div>
            </div>
            <div className='ml-14 '>
                <div className='w-full flex h-14'>
                    <h1 className='my-auto ml-10 text-xl'>Movies</h1>
                </div>
                <div className='mt-2 lg:flex hidden'>
                      <Swiper
                          slidesPerView={3}
                          freeMode={true}
                          spaceBetween={-1000}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[FreeMode, Pagination]}
                          className="mySwiper mx-0 h-full flex  w-screen mr-10 "
                          
                          >
                           {hmmovie && hmmovie.results.map((movies)=>(
                            <SwiperSlide key={movies.id}   >
                              <MovieCard key={movies.id} value={movies}/>
                            </SwiperSlide>   
                          ))} 
                        
                      </Swiper>
                </div>
            </div>
            <div className='mt-2 lg:flex flex-col hidden ml-14'>
                <div className='w-full flex h-14'>
                      <h1 className='my-auto ml-10 text-xl'>TV shows</h1>
                </div>
                <Tv />
            </div>
            
            
            <Footer/>
        </div>
    );
};

export default home;
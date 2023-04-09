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
              
            </div>
            <div className="pt-2 absolute mx-auto  text-white z-20" style={{bottom:'860px',right:'200px'}}>
                <input className="border-2 border-gray-800  bg-transparent  h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                  type="search" name="search" placeholder="Search"/>
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                  <svg className="text-gray-800 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966"  xml:space="preserve"
                    width="512px" height="512px">
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
            </div>
            <div className='ml-14 '>
                <div className='w-full flex h-14'>
                    <h1 className='my-auto ml-10 text-xl'>Trending</h1>
                </div>
                <div className='mt-2 lg:flex hidden'>
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
            </div>
            <div className='ml-14 '>
                <div className='w-full flex h-14'>
                    <h1 className='my-auto ml-10 text-xl'>Movies</h1>
                </div>
                <div className='mt-2 lg:flex hidden'>
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
                           {hmmovie && hmmovie.results.map((movies)=>(
                            <SwiperSlide key={movies.id} >
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
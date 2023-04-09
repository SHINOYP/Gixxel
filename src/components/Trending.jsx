// import React from 'react'
// import { useQuery } from 'react-query'
// import { useDispatch,useSelector } from 'react-redux'
// import {SET_TV} from '../store'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation,FreeMode } from "swiper";
// import MovieCard from './movieCard';
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";




// export default function Trending() {

//     const dispatch=useDispatch()
//     const query=useQuery()
//     const tvDiscover=useSelector((state)=>state.tv.value)
//     const fetchTvShow=async()=>{
//         const response=await fetch("https://api.themoviedb.org/3/import React from 'react'
// import { useQuery } from 'react-query'
// import { useDispatch,useSelector } from 'react-redux'
// import {SET_TV} from '../store'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation,FreeMode } from "swiper";
// import MovieCard from './movieCard';
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";




// export default function tvshow() {

//     const dispatch=useDispatch()
//     const query=useQuery()
//     const tvDiscover=useSelector((state)=>state.tv.value)
//     const fetchTvShow=async()=>{
//         const response=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=af303dcb7ba62163922f8128770e6c9a&language=en-US",
//         {method:"GET"})
//         const result=await response.json()
//         dispatch(SET_TV(result))
//         return result;
//     }

//     const {data}=useQuery('tv',fetchTvShow)

//     const movies=tvDiscover.results
//     console.log(movies)
//   return (
//     <div>
//           <Swiper
//                           slidesPerView={3}
//                           spaceBetween={-1000}
//                           freeMode={true}
//                           pagination={{
//                             clickable: true,
//                           }}
//                           modules={[FreeMode, Pagination]}
//                           className="mySwiper mx-0 h-full  w-screen  "
                          
//                           >
//                            {movies && movies.map((movies)=>(
//                             <SwiperSlide key={movies.id} >
//                               <MovieCard key={movies.id} value={movies}/>
//                             </SwiperSlide>   
//                           ))} 
                        
//                         </Swiper>
                    
//     </div>
//   )
// }
// ?api_key=af303dcb7ba62163922f8128770e6c9a&language=en-US",
//         {method:"GET"})
//         const result=await response.json()
//         dispatch(SET_TV(result))
//         return result;
//     }

//     const {data}=useQuery('tv',fetchTvShow)

//     const movies=tvDiscover.results
//     console.log(movies)
//   return (
//     <div>
//           <Swiper
//                           slidesPerView={3}
//                           spaceBetween={-1000}
//                           freeMode={true}
//                           pagination={{
//                             clickable: true,
//                           }}
//                           modules={[FreeMode, Pagination]}
//                           className="mySwiper mx-0 h-full  w-screen  "
                          
//                           >
//                            {movies && movies.map((movies)=>(
//                             <SwiperSlide key={movies.id} >
//                               <MovieCard key={movies.id} value={movies}/>
//                             </SwiperSlide>   
//                           ))} 
                        
//                         </Swiper>
                    
//     </div>
//   )
// }

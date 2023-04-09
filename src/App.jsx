import React, { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css'
import Home from '../src/pages/home'
import Movies from './pages/movies'
import Navbar from './components/navbar';
import Tv from './pages/TV'
import { QueryClientProvider,QueryClient } from 'react-query'
import {useDispatch,useSelector} from 'react-redux'
import {SET_HMMOVIE, SET_MOVIE} from '../src/store';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    const getTrendingMv=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=af303dcb7ba62163922f8128770e6c9a',{
          method:"GET"
      })
      const result=await response.json()
      dispatch(SET_MOVIE(result))
      return result
  }
  getTrendingMv();

      const getMovie=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=af303dcb7ba62163922f8128770e6c9a&language=en-US&page=1',{
            method:"GET"
        })
        const result=await response.json()
        dispatch(SET_HMMOVIE(result))
        return result
        }
        getMovie();
  },[dispatch])
 
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  const dicover=useSelector((state)=>state.movie.value)
  // const end=import.meta.env.VITE_KEY;
  if(dicover){
  return (
    <div className="App flex h-screen w-screen z-0">
   
        <QueryClientProvider client={client}>
          <Navbar/>
          <Routes>
              <Route
              path='/'
              element={<Home/>}
              />
              <Route
              path='/movies'
              element={<Movies/>}
              />
              <Route
              path='/tv'
              element={<Tv/>}
              />
          </Routes>
        </QueryClientProvider>
     
    </div>
  )
  }
  else{
    return <h1>loading.....</h1>
  }
}

export default App

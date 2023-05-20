import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import { SET_HMMOVIE, SET_MOVIE, SET_TV } from "./services/store";
import { fetchMovie, fetchTrending, fetchTvShow } from "./services/index";
import Home from "./pages/home/home";
import Movies from "./pages/movies/movies";
import Navbar from "./components/navbar/navbar";
import Tv from "./pages/tv/TV";
import SearchMovie from "./pages/search/SearchMovie";

function App() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.movie.value);

  useEffect(() => {
    fetchTvShow().then((data) => {
      dispatch(SET_TV(data));
    });
    fetchTrending().then((data) => {
      dispatch(SET_HMMOVIE(data));
    });
    fetchMovie().then((data) => {
      dispatch(SET_MOVIE(data));
    });
  },[]);
  
  // const end=import.meta.env.VITE_KEY;
  if (content) {
    return (
      <div className="App flex h-screen w-screen z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/search" element={<SearchMovie />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <Triangle
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
}

export default App;

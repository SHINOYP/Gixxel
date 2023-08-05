import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import { SET_HMMOVIE, SET_MOVIE, SET_TV } from "./services/store";
import { fetchMovie, fetchTrending, fetchTvShow } from "./services/index";
import Home from "./pages/home/home";
import Movies from "./pages/movieShowPage/movies";
import Tv from "./pages/tvShowPage/TV";
import MobileMovie from "./pages/Mobile/movies";
import MobileTv from "./pages/Mobile/tv";
import SearchMovie from "./pages/searchPage/SearchMovie";
import MovieDetails from "./pages/MovieDetails/movieDetails";
import Animation from "./pages/Mobile/animation";

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
  }, []);
  return (
    <>
      {content ? (
        <div className="App flex h-screen w-screen z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:gid" element={<Movies />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/search" element={<SearchMovie />} />{" "}
            <Route path="/:mid" element={<MovieDetails />} />
            {/* Mobile Only Pages */}
            <Route path="/Movies" element={<MobileMovie />} />
            <Route path="/MTv" element={<MobileTv />} />
            <Route path="/Animation" element={<Animation />} />
          </Routes>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;

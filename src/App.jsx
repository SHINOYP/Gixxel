import React, { useEffect,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import { SET_HMMOVIE, SET_MOVIE, SET_TV } from "./services/store";
import { fetchMovie, fetchTrending, fetchTvShow } from "./services/index";
const Home = React.lazy(() => import('./pages/home/home'));
const Genere  = React.lazy(() => import('./pages/ShowGenreWise/GenreShow'));
const SearchResults = React.lazy(() => import('./pages/searchPage/SearchMovie'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails/movieDetails'));
//mobile only pages
const  MobileMovie = React.lazy(() => import('./pages/Mobile/movies'));
const  MobileTv = React.lazy(() => import('./pages/Mobile/tv'));
const   Anime = React.lazy(() => import('./pages/Mobile/animation'));



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
    {/* Only load when the Home page data is fetched  Otherwise keep the page in loading state*/}
      {content ? (
        <Suspense fallback={ <div className="loading">
        <Triangle
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* fetch Genere wise */}
            <Route path="/:type/:id" element={<Genere />} />
            {/* Search result  */}
            <Route path="/search/:query" element={<SearchResults />} />
            {/* Detials page */}
            <Route path="/:mid" element={<MovieDetails />} />
            
            {/* Mobile Only Pages */}
            <Route path="/MobileMovies" element={<MobileMovie />} />
            <Route path="/MobileTv" element={<MobileTv />} />
            <Route path="/Animation" element={<Anime />} />
          </Routes>
        </div>
        </Suspense>
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

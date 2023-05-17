import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import MovieCard from "../../components/movieCard/movieCard";
import "./smStyle.sass";


export default function SearchMovie() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setMovies(location.state.result.results);
  }, []);

  if (movies) {
    return (
      <div className="sm ">
        <div className="sm-main">
          {movies &&
            movies.map((movie) => (
              <div className="sm-card-contain">
                <MovieCard key={movie.id} value={movie} />
              </div>
            ))}
        </div>
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

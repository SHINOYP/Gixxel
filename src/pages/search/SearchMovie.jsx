import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import MovieCard from "../../components/movieCard/movieCard";
import "./smStyle.sass";
import Layout from "../../components/Layout/Layout";

export default function SearchMovie() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setMovies(location.state.result.results);
  }, []);

  if (movies) {
    return (
      <Layout>
        <div className="sm ">
          <div className="sm-main ">
            <h4>Search Results...</h4>
            <div className="sm-cards">
              {movies &&
                movies.map((movie) => (
                  <div
                    onClick={() => navigate(`/${movies.id || movie.id}`)}
                    className="sm-card-contain  "
                  >
                    <MovieCard key={movie.id} value={movie} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
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

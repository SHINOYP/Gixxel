import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_GENRE } from "../../services/store";
import { Audio, Triangle } from "react-loader-spinner";
import MovieCard from "../../components/movieCard/movieCard";
import Pagination from "@mui/material/Pagination";
import "./movieStyle.sass";

export default function movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const myProp = location.state?.myProp;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const fetchSomething = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=af303dcb7ba62163922f8128770e6c9a&with_genres=${myProp}&page=${currentPage}`,
        { method: "GET" }
      );
      const result = await response.json();

      setMovies(result.results);
      setTotalPages(result.total_pages);
    };
    fetchSomething();
  }, [currentPage]);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {loading ? (
        <div className="loading">
          <Triangle
            height="100"
            width="100"
            radius="25"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div className="movie ">
          <div className="movie-main ">
            {movies &&
              movies.map((movie) => (
                <div className="movie-card-contain">
                  <MovieCard key={movie.id} value={movie} />
                </div>
              ))}
          </div>
          <div className="movie-page-contain ">
            <Pagination
              className=" w-full mx-auto bg-white  h-8  transparent items-center rounded-xl"
              count={100}
              page={currentPage}
              style={{ width: "359px" }}
              onChange={handlePaginationChange}
              color="primary"
            />
          </div>
        </div>
      )}
    </>
  );
}

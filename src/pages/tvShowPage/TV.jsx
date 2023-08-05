import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_GENRE } from "../../services/store";
import MovieCard from "../../components/movieCard/movieCard";
import Pagination from "@mui/material/Pagination";
import "./tvStyle.scss";
import Layout from "../../components/Layout/Layout";

export default function movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const myProp = location.state?.myProp;

  const fetchSomething = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${
        import.meta.env.VITE_KEY
      }&with_genres=${myProp}&page=${currentPage}`,
      { method: "GET" }
    );
    const result = await response.json();

    setMovies(result.results);
    setLoading(false);
    setTotalPages(result.total_pages);
  };

  useEffect(() => {
    fetchSomething();
  }, [currentPage]);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {loading ? (
        <Layout>
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
        </Layout>
      ) : (
        <Layout>
          <div className="tv-">
            <div className="tv-main  ">
              {movies &&
                movies.map((movie) => (
                  <div className="tv-card-contain">
                    <MovieCard key={movie.id} value={movie} />
                  </div>
                ))}
            </div>
            <div className="tv-page-contain ">
              <Pagination
                className="tv-page-component"
                count={100}
                page={currentPage}
                style={{ width: "359px" }}
                onChange={handlePaginationChange}
                color="primary"
              />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

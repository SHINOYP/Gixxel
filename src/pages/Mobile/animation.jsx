import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { fetchAnimation } from "../../services";
import MovieCard from "../../components/movieCard/movieCard";
import Layout from "../../components/Layout/Layout";
import Pagination from "@mui/material/Pagination";
import "../searchPage/smStyle.scss";




export default function Animation() {
  const [anime, setAnime] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetchAnimation(currentPage).then((data) => {
      setAnime(data.results);
    });
  }, [currentPage]);
  const handlePaginationChange = (event, value) => {
    setCurrentPage(value)
  };
  return (
    <>
      {anime ? (
        <Layout>
          <div className="sm ">
            <div className="sm-main ">
              <h4>Search Results...</h4>
              <div className="sm-cards">
                {anime &&
                  anime.map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => navigate(`/${movies.id || movie.id}`)}
                      className="sm-card-contain  "
                    >
                      <MovieCard key={movie.id} value={movie} />
                    </div>
                  ))}
              </div>
              <div>
              <Pagination
                className="movie-pagination"
                count={100}
                page={currentPage}
                onChange={handlePaginationChange}
                color="primary"
              />
            </div>
            </div>
          </div>
        </Layout>
      ) : (
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
      )}
    </>
  );
}

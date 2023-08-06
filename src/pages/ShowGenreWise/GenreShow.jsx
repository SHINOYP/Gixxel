import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_GENRE } from "../../services/store";
import { Audio, Triangle } from "react-loader-spinner";
import MovieCard from "../../components/movieCard/movieCard";
import Pagination from "@mui/material/Pagination";
import Layout from "../../components/Layout/Layout";
import "./GenreStyle.scss";


export default function  GenereShow() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const myProp = location.state?.myProp;
  const params = useParams();

  const fetchGenre = async () => {
    setLoading(true)
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${params.type}?api_key=${
        import.meta.env.VITE_KEY
      }&with_genres=${myProp || params.id}&page=${currentPage}`,
      { method: "GET" }
    );
    const result = await response.json();
    setMovies(result.results);
    setTotalPages(result.total_pages);
    setCurrentPage(result.page)
    setLoading(false)
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value)
  };


  useEffect(()=>{
    fetchGenre()
  },[params.id,currentPage])
  return (
    <>
      {loading ? (
        <Layout>
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
        </Layout>
      ) : (
        <Layout>
          <div className="movie">
            <div className="movie-main ">
              {movies &&
                movies.map((movie,item) => (
                  <div key={item} className="movie-card-contain">
                    <MovieCard key={movie.id} value={movie} />
                  </div>
                ))}
            </div>
            <div>
              <Pagination
                className="pagination-container"
                count={100}
                page={currentPage}
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

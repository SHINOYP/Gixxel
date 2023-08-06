import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { fetchSearch } from "../../services";
import MovieCard from "../../components/movieCard/movieCard";
import Layout from "../../components/Layout/Layout";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import "./smStyle.scss";

export default function SearchMovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchSearch(currentPage, params?.query).then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
    window.scrollTo(0, 0);
  }, [currentPage,params.query]);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };
  // console.log(movies)

  return (
    <>
      {" "}
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
          <div className="sm ">
            <div className="sm-main ">
              <h4>Search Results...</h4>
              <div className="sm-cards">
                {!movies.length==0?(
                  <>{movies &&
                  movies.map((movie) => (
                    <div
                      onClick={() => navigate(`/${movies.id || movie.id}`)}
                      className="sm-card-contain  "
                    >
                      <MovieCard key={movie.id} value={movie} />
                    </div>
                  ))}</>):<div className="no-results"><h1>No results found</h1>    <Button variant="outlined" sx={{height:'3rem',width:'max-content',color:'#0FEFFD'}} onClick={()=>{navigate('/')}}>Go back</Button></div>}
              </div>
   
               {movies.length==0?'': <Pagination
                className="pagination-container"
                  count={100}
                  page={currentPage}
                  onChange={handlePaginationChange}
                  color="primary"
                />
            }
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

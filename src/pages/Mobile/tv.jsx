import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { fetchTvShow } from "../../services";
import MovieCard from "../../components/movieCard/movieCard";
import Layout from "../../components/Layout/Layout";
import "../searchPage/smStyle.scss";

export default function MobileTV() {
  const [tv, setTv] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetchTvShow().then((data) => {
      setTv(data.results);
      setLoading(false);
    });
  }, []);

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
          <div className="sm">
            <div className="sm-main">
              <h4>Search Results...</h4>
              <div className="sm-cards">
                {tv &&
                  tv?.map((movie, item) => (
                    <div
                      key={item}
                      onClick={() => navigate(`/${movies.id || movie.id}`)}
                      className="sm-card-contain"
                    >
                      <MovieCard key={movie.id} value={movie} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

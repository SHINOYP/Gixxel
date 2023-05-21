import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import MovieCard from "../../components/movieCard/movieCard";
import "../search/smStyle.sass";
import Layout from "../../components/Layout/Layout";
import { fetchTvShow } from "../../services";

export default function MobileTV() {
  const [tv, setTv] = useState([]);
  const location = useLocation();
  const navigate=useNavigate()
  useEffect(() => {
    fetchTvShow().then((data)=>{
        setTv(data.results)
    })
  }, []);

  if (tv) {
    return (
      <Layout>
        <div className="sm ">
          <div className="sm-main ">
            <h4>Search Results...</h4>
            <div className="sm-cards">
              {tv &&
                tv.map((movie) => (
                  <div  onClick={()=>navigate(`/${movies.id || movie.id}`)} className="sm-card-contain  ">
                    <MovieCard key={movie.id} value={movie}  />
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

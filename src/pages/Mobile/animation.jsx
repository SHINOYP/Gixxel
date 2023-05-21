import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import MovieCard from "../../components/movieCard/movieCard";
import "../search/smStyle.sass";
import Layout from "../../components/Layout/Layout";
import { fetchAnimation } from "../../services";

export default function Animation() {
  const [anime, setAnime] = useState([]);
  const location = useLocation();
  const navigate=useNavigate()
  useEffect(() => {
    fetchAnimation().then((data)=>{
        setAnime(data.results)
        console.log (data)
    })
  }, []);

  if (anime) {
    return (
      <Layout>
        <div className="sm ">
          <div className="sm-main ">
            <h4>Search Results...</h4>
            <div className="sm-cards">
              {anime &&
                anime.map((movie) => (
                  <div key={movie.id}  onClick={()=>navigate(`/${movies.id || movie.id}`)} className="sm-card-contain  ">
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

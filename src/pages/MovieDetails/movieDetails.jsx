import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./movieDetailStyles.scss";
import { useNavigate, useParams } from "react-router-dom";
import { fetchmovieDetails } from "../../services";
import { Triangle } from "react-loader-spinner";
import { data } from "autoprefixer";
import MovieCard from "../../components/movieCard/movieCard";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import Footer from "../../components/Layout/Footer/Footer";
import VideoPlay from "../../components/VideoPlay";
import Layout from "../../components/Layout/Layout"
import YouTube from "react-youtube";


const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState();
  const [trailerId, setTrailerId] = useState();
  const [playTrailer, setPlayTrailer] = useState(false);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchmovieDetails(params.mid).then((data) => {
      setDetails(data);
      setLoading(false);
    });
    handleSimilar();
    window.scrollTo(0, 0);
  }, [params.mid]);

  const handleSimilar = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.mid}/similar?api_key=${
        import.meta.env.VITE_KEY
      }`,
      {
        method: "GET",
      }
    );
    const jsonData = await response.json();
    setSimilar(jsonData);
  };

  // // Function to fetch movie videos by ID
  async function fetchMovieVideos(movieId) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${
        import.meta.env.VITE_KEY
      }`
    );
    const data = await response.json();
    return data.results;
  }

  const fetchTrailer = async () => {
    fetchMovieVideos(params.mid)
      .then((videos) => {
        console.log("Movie Videos:", videos);
        const trailer = videos.find((video) => video.type === "Trailer");
        setTrailerId(trailer.key);
        if (trailer) {
          const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
        } else {
          console.log("No trailer found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <>
      {loading ? (
        <Layout>
          {" "}
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
        <div className="details">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="details-back"
          >
            <KeyboardBackspaceSharpIcon className="back-icon" />
          </button>
          {!playTrailer ? (
            <img
              className="details-backdrop"
              src={import.meta.env.VITE_IMG_URI + details.backdrop_path}
            />
          ) : (
            <YouTube
              videoId={trailerId}
              iframeClassName="details-trailer-container"
              onEnd={() => setPlayTrailer(!playTrailer)}
              onError={() => setPlayTrailer(!playTrailer)}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                },
              }}
            />
          )}
          <a
            class={playTrailer ? "paly-btn-disable" : "play-btn"}
            href="#"
            onClick={() => setPlayTrailer(!playTrailer)}
          ></a>
          <div className="details-main"></div>
          <div className="details-reco">
            <div className="flex">
              <div className="details-poster">
                <MovieCard value={details} />
                {/* <h6>
        
              {details.release_date?.slice(0, 4)}
            </h6> */}
              </div>
              <div className="details-content">
                <div>
                  <h2 className="text-xl md:text-4xl">
                    {details.original_title}
                  </h2>
                  <div className="details-count">
                    <h6>
                      <span>Popularity: </span>
                      {details.popularity}
                    </h6>

                    <h6>
                      <span>Vote Count: </span>
                      {details.vote_count}
                    </h6>

                    <h6>
                      <span>Average Vote: </span>
                      {details.vote_average}
                    </h6>
                  </div>
                  <hr />
                </div>
                <div>
                  <h3>
                    <span>Title :</span> {details.original_title}
                  </h3>
                  <h3>
                    {" "}
                    <span>Release Date :</span> {details.release_date}
                  </h3>
                  <p>
                    {" "}
                    <span>Overview :</span> {details.overview}
                  </p>
                </div>
              </div>
              <div className="details-btns">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
                >
                  Trailer
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Back
                </button>
              </div>
            </div>

            <div className="similar">
              <hr />
              <h1 className="similar-h1">Similar</h1>
              <Swiper
                slidesPerView={2}
                freeMode={true}
                style={{ backgroundColor: "black" }}
                breakpoints={{
                  0: {
                    spaceBetween: -120,
                  },
                  400: {
                    spaceBetween: -150,
                  },
                  639: {
                    spaceBetween: -100,
                  },
                  865: {
                    spaceBetween: -400,
                  },
                  1000: {
                    spaceBetween: -400,
                  },
                  1200: {
                    spaceBetween: -800,
                  },
                  1500: {
                    spaceBetween: -900,
                  },
                  1700: {
                    spaceBetween: -1300,
                  },
                  2000: {
                    spaceBetween: -1900,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper  recom-swiper "
              >
                {similar &&
                  similar?.results?.map((movies) => (
                    <SwiperSlide
                      onClick={() => navigate(`/${movies.id}`)}
                      key={movies.id}
                    >
                      <MovieCard key={movies.id} value={movies} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            {/* <Footer/> */}
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetails;

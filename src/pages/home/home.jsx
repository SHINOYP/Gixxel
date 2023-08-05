import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import "./homeStyle.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Tv from "../../components/tvshowslider/tvshow";
import Rating from "@mui/material/Rating";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/movieCard/movieCard";
import Layout from "../../components/Layout/Layout";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const home = () => {
  const IMG_URL = import.meta.env.VITE_IMG_URI;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie?.value);
  const TrendingMovies = useSelector((state) => state.hmmovie?.value);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="home">
        <div className=" home-main">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // effect={"fade"}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
          >
            {movies?.results.slice(0, 8).map((item) => (
              <SwiperSlide key={item.id}   onClick={() => navigate(`/${item.id}`)}>
                <img src={IMG_URL + item.backdrop_path} />
                <h1 className="home-slider-h1 ">{item.title}</h1>
                <span className="home-slider-date">{item.release_date} | </span>
                <span className="home-slider-lan">
                  {item.original_language}{" "}
                </span>
                <Rating
                  className="home-slider-rating"
                  sx={{ fontSize: { xs: "0.7rem", md: "1.5rem" } }}
                  value={item.vote_average / 2}
                  precision={0.5}
                  readOnly
                />
                <p className="home-slider-p">{item.overview}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <SearchBar />
        </div>
        <div className="home-content">
          <div className="home-trending-head ">
            <div className="home-trending-head-main">
              <h1>Now Playing</h1>
            </div>
            <div className="home-trending-swiper-div">
              {movies ? (
                <>
                  {" "}
                  <Swiper
                    slidesPerView={2}
                    freeMode={true}
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
                    className="mySwiper"
                  >
                    {movies &&
                      movies?.results.map((movies) => (
                        <SwiperSlide
                          key={movies.id}
                          onClick={() => navigate(`/${movies.id}`)}
                        >
                          <MovieCard key={movies.id} value={movies} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </>
              ) : (
                <>
                  {" "}
                  <Skeleton
                    count={1}
                    height={380}
                    inline={true}
                    baseColor="#000000"
                    highlightColor="#363538"
                  />
                </>
              )}
            </div>
          </div>
          <div className="home-trending-head ">
            <div className="home-trending-head-main">
              <h1 className="mr-2"> Trending TV Show</h1><NavigateNextRoundedIcon/>
            </div>
            <Tv />
            <div className="">
              <div className="home-trending-head-main">
                <h1 className="mr-2"> Trending Movies</h1><NavigateNextRoundedIcon/>
              </div>
              <div className="home-trending-swiper-div">
                {TrendingMovies ? (
                  <Swiper
                    slidesPerView={2}
                    freeMode={true}
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
                    className="mySwiper  "
                  >
                    {TrendingMovies &&
                      TrendingMovies.results.map((movies) => (
                        <SwiperSlide
                          onClick={() => navigate(`/${movies.id}`)}
                          key={movies.id}
                        >
                          <MovieCard  key={movies.id} value={movies} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                ) : (
                  <>
                    <Skeleton
                      count={1}
                      height={380}
                      inline={true}
                      baseColor="#000000"
                      highlightColor="#363538"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default home;

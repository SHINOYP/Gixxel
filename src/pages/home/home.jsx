import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard/movieCard";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import Tv from "../../components/tvshowslider/tvshow";
import { SET_TV } from "../../store";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { EffectFade,Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import Footer from "../../components/Footer/Footer";
import Rating from "@mui/material/Rating";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./homeStyle.sass";


const home = () => {
  const IMG_URL = import.meta.env.VITE_IMG_URI;
  const dispatch = useDispatch();
  const dicover = useSelector((state) => state.movie?.value);
  const hmmovie = useSelector((state) => state.hmmovie?.value);

  useEffect(() => {
    const fetchTvShow = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=af303dcb7ba62163922f8128770e6c9a",
        { method: "GET" }
      );
      const result = await response.json();
      dispatch(SET_TV(result));
      return result;
    };
    fetchTvShow();
  }, [dispatch]);

  const movies = dicover.results;
  console.log(dicover)
  return (
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
          modules={[EffectFade,Autoplay, Pagination, Navigation]}
        >
          {dicover?.results.slice(0, 8).map((item) => (
            <SwiperSlide>
              <img src={IMG_URL + item.backdrop_path} />
              <h1 className="home-slider-h1 ">{item.title}</h1>
              <span className="home-slider-date">{item.release_date} | </span>
              <span className="home-slider-lan">{item.original_language} </span>
              <Rating
                className="home-slider-rating"
                sx={{ fontSize: { xs: "0.7rem", md: "1.5rem" } }}
                value={item.vote_average / 2}
                precision={0.5}
                readOnly
              />
              <p className="home-slider-p">{dicover?.results[0].overview}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <SearchBar />
      </div>
      <div className="home-content">
      <div className="home-trending-head ">
        <div className="home-trending-head-main">
          <h1>Trending</h1>
        </div>
        <div className="home-trending-swiper-div">
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
              movies.map((movies) => (
                <SwiperSlide key={movies.id}>
                  <MovieCard key={movies.id} value={movies} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="home-trending-head ">
        <div className="home-trending-head-main">
          <h1>Movies</h1>
        </div>
        <div className="home-trending-swiper-div">
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
            {hmmovie &&
              hmmovie.results.map((movies) => (
                <SwiperSlide key={movies.id}>
                  <MovieCard key={movies.id} value={movies} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="home-trending-head ">
        <div className="home-trending-head-main">
          <h1>TV Shows</h1>
        </div>
       <Tv/>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default home;

import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import MovieCard from "../movieCard/movieCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./tvshowsliderStyle.sass";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function tvshow() {
  const tvDiscover = useSelector((state) => state.tv.value);
  const navigate = useNavigate();
  if (tvDiscover) {
    return (
      <div>
        <Swiper
          slidesPerView={2}
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
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >
          {tvDiscover &&
            tvDiscover.results.map((movies) => (
              <SwiperSlide
                key={movies.id}
                onClick={() => navigate(`/${movies.id}`)}
              >
                <MovieCard key={movies.id} value={movies} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  } else {
    return (
      <>
        <Skeleton
          count={1}
          height={380}
          inline={true}
          baseColor="#000000"
          highlightColor="#363538"
        />
      </>
    );
  }
}

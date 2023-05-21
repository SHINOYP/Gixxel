//Get trending Tv Shows
const fetchTvShow = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${
        import.meta.env.VITE_KEY
      }`,
      { method: "GET" }
    )
      .then(function (response) {
        resolve(response.json());
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

//Get Trending all
const fetchTrending = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        import.meta.env.VITE_KEY
      }`,
      {
        method: "GET",
      }
    )
      .then(function (response) {
        resolve(response.json());
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

//Get Popular movies
const fetchMovie = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_KEY
      }`,
      {
        method: "GET",
      }
    )
      .then(function (response) {
        resolve(response.json());
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

//Get A movie details
const fetchmovieDetails = (mid) => {
  console.log(mid);
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${mid}?api_key=${
        import.meta.env.VITE_KEY
      }`,
      {
        method: "GET",
      }
    )
      .then(function (response) {
        resolve(response.json());
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

//Get All availabe geners
const fetchMovieAllGenere = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        import.meta.env.VITE_KEY
      }`,
      {
        method: "GET",
      }
    )
      .then(function (response) {
        resolve(response.json());
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

//Get Animation
const fetchAnimation = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_KEY
      }&with_genres=16`,
      {
        method: "GET",
      }
    )
      .then(function (response) {
        resolve(response.json());
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export {
  fetchTvShow,
  fetchTrending,
  fetchMovie,
  fetchmovieDetails,
  fetchMovieAllGenere,
  fetchAnimation,
};

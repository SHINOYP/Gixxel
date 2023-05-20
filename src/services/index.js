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

export { fetchTvShow, fetchTrending, fetchMovie };

import axios from 'axios';

const API_KEY = '2f8d6050c74d5f454a522d74a8cedbb8';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getMovies = async () => {
  const responce = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
  );

  const trendingMovies = responce.data.results.map(({ id, title }) => {
    return { id, title };
  });

  return trendingMovies;
};

const getMoviesById = async id => {
  const responceId = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
  );

  return responceId.data;
};

const getMoviesReviews = async id => {
  const responceReviews = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
  );

  const reviewsMovies = responceReviews.data.results.map(
    ({ author, content, id }) => {
      return { author, content, id };
    },
  );
  // console.log(reviewsMovies);
  return reviewsMovies;
};

const getMoviesCasts = async id => {
  const responceCasts = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  );

  // const castsMovies = responceCasts.data.cast.map(
  //   ({ character, id, name, profile_path }) => {
  //     return { character, id, name, profile_path };
  //   },
  // );

  // console.log(responceCasts.data);
  // console.log(castsMovies);

  return responceCasts.data;
};

const getMoviesQuery = async query => {
  const responceCasts = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
  // console.log(responceCasts.data.results);
  return responceCasts.data.results;
};

export {
  getMovies,
  getMoviesById,
  getMoviesReviews,
  getMoviesCasts,
  getMoviesQuery,
};

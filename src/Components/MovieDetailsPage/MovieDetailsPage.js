import {
  useParams,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { getMoviesById, getMoviesReviews, getMoviesCasts } from 'Api/Api.js';
import { useState, useEffect, useRef } from 'react';
import Reviews from 'Components/Reviews/Reviews.js';
import Cast from 'Components/Cast/Cast.js';

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  // console.log(match.url);

  const [moviesIdInfo, setMoviesIdInfo] = useState(null);
  const [moviesIdReview, setMoviesIdReview] = useState(null);
  const [moviesIdCast, setMoviesIdCast] = useState(null);

  const { moviesId } = useParams();
  // console.log('moviesId',moviesId);

  const routerState = useRef(null);
  // console.log(routerState.current);

  const history = useHistory();
  // console.log('history', history);
  const location = useLocation();
  // console.log('location', location.state);

  useEffect(() => {
    if (!routerState.current) {
      routerState.current = location.state;
    }
  }, []);

  useEffect(() => {
    getMoviesById(moviesId).then(setMoviesIdInfo);
    getMoviesReviews(moviesId).then(setMoviesIdReview);
    getMoviesCasts(moviesId).then(setMoviesIdCast);
  }, [moviesId]);

  return (
    <>
      <button
        onClick={() => {
          const paramsPath = routerState.current.params.pathname;
          const paramsSearch = routerState.current.params.search;

          // console.log(`${paramsPath}${paramsSearch}`);
          history.push(`${paramsPath}${paramsSearch}`);
        }}
      >
        Назад
      </button>

      <h2>MovieDetailsPage</h2>
      {moviesIdInfo && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesIdInfo.poster_path}`}
            alt={moviesIdInfo.title}
            width="150"
          />
          <h2>
            {moviesIdInfo.title}({moviesIdInfo.release_date.slice(0, 4)})
          </h2>
          <h3>Overview:</h3>
          <p>{moviesIdInfo.overview}</p>
          <h3>Genres</h3>
          <p>{moviesIdInfo.genres.map(genre => genre.name + ' ')}</p>
          <Link to={`${match.url}/cast`}>
            <li>Cast</li>
          </Link>
          <Link to={`${match.url}/reviews`}>
            <li>Reviews</li>
          </Link>
          <Route path={`${match.url}/cast`}>
            {moviesIdCast && <Cast moviesIdCast={moviesIdCast} />}
          </Route>
          <Route path={`${match.url}/reviews`}>
            {moviesIdReview && <Reviews moviesIdReview={moviesIdReview} />}
          </Route>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;

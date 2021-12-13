import { getMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  // const match = useRouteMatch();
  const [movies, setMovies] = useState(null);
  // console.log(match);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>HomePage</h2>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            {/* <Link to={`movies/${movie.id}`}>{movie.title}</Link> */}
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { params: location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default HomePage;

import { useState, useEffect } from 'react';
import { getMoviesQuery } from 'Api/Api';
import { useHistory, useLocation, useRouteMatch, Link } from 'react-router-dom';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [findFilm, setFindFilm] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const queryUrl = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!queryUrl) return;

    getMoviesQuery(queryUrl).then(data => {
      setFilms([...data]);
    });
  }, [queryUrl]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setFindFilm(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });

    e.target.elements.query.value = '';
  };

  return (
    <>
      <h2>MoviesPage</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>search</button>
      </form>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link
              to={{
                pathname: `${url}/${film.id}`,
                state: { from: location },
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default MoviesPage;

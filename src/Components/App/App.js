import { lazy, Suspense } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation.js';
import { Route, Switch } from 'react-router-dom';
// import HomePage from "HomePage/HomePage";

const HomePage = lazy(() => import('Components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('Components/MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
  import('Components/MovieDetailsPage/MovieDetailsPage.js'),
);
const NotFoundView = lazy(() =>
  import('Components/NotFoundView/NotFoundView.js'),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

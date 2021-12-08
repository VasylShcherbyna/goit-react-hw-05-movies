import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import HomePageView from "./views/HomePageView";
import MoviesPageView from "./views/MoviesPageView";

function App() {
  <>
    HomePageView
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          HomePage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          MoviesPage
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePageView} />
      <Route exact path="/books" component={MoviesPageView} />
    </Switch>
  </>;
}

export default App;

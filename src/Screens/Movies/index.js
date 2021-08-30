import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import {
  getAllMovies,
  getLatestMovies,
  getPopularMovies,
} from "../../apis/getMovies";
import Navbar from "../../Components/Navbar";
import All from "./All";

import Discover from "./Discover";
import Favorites from "./Favorites";
import Latest from "./Latest";
import Popular from "./Popular";

const Movies = ({ isLoggedIn, user }) => {
  const { path } = useRouteMatch();
  const [allMoviesLoading, setAllMoviesLoading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [latestMoviesLoading, setLatestMoviesLoading] = useState(true);
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMoviesLoading, setPopularMoviesLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(async () => {
    if (allMoviesLoading) {
      const data = await getAllMovies();
      setAllMoviesLoading(false);
      setAllMovies(data.results);
      console.log(data.results);
    }
  }, [allMoviesLoading]);

  // get latest movies
  useEffect(async () => {
    if (latestMoviesLoading) {
      const data = await getLatestMovies();
      setLatestMoviesLoading(false);
      setLatestMovies(data.results);
      console.log(data.results);
    }
  }, [latestMoviesLoading]);

  // get popular movies
  useEffect(async () => {
    if (popularMoviesLoading) {
      const data = await getPopularMovies();
      setPopularMoviesLoading(false);
      setPopularMovies(data.results);
      console.log(data.results);
    }
  }, [popularMoviesLoading]);
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} user={user} />
      <Switch>
        <Route
          exact
          path={path}
          component={() => (
            <Discover
              isLoggedIn={isLoggedIn}
              allMoviesLoading={allMoviesLoading}
              latestMoviesLoading={latestMoviesLoading}
              popularMoviesLoading={popularMoviesLoading}
              allMovies={allMovies.slice(0, 8)}
              popularMovies={popularMovies.slice(0, 8)}
              latestMovies={latestMovies.slice(0, 8)}
            />
          )}
        />
        <Route
          exact
          path={`${path}/all`}
          component={() => (
            <All
              isLoggedIn={isLoggedIn}
              allMoviesLoading={allMoviesLoading}
              allMovies={allMovies}
            />
          )}
        />
        <Route
          exact
          path={`${path}/popular`}
          component={() => (
            <Popular
              isLoggedIn={isLoggedIn}
              popularMovies={popularMovies}
              popularMoviesLoading={popularMoviesLoading}
            />
          )}
        />
        <Route
          exact
          path={`${path}/latest`}
          component={() => (
            <Latest
              isLoggedIn={isLoggedIn}
              latestMovies={latestMovies}
              latestMoviesLoading={latestMoviesLoading}
            />
          )}
        />
        {isLoggedIn && (
          <Route
            exact
            path={`${path}/favorites`}
            component={() => <Favorites isLoggedIn={isLoggedIn} />}
          />
        )}
      </Switch>
    </>
  );
};

export default Movies;

import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addFavorite,
  getAllMovies,
  getFavoriteMovies,
  getLatestMovies,
  getPopularMovies,
  removeFavorite,
} from "../../apis/getMovies";
import Navbar from "../../Components/Navbar";
import All from "./All";

import Discover from "./Discover";
import Favorites from "./Favorites";
import Latest from "./Latest";
import Popular from "./Popular";

const Movies = ({ isLoggedIn, user, logout }) => {
  const { path } = useRouteMatch();
  const [allMoviesLoading, setAllMoviesLoading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [latestMoviesLoading, setLatestMoviesLoading] = useState(true);
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMoviesLoading, setPopularMoviesLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [favoriteMoviesLoading, setFavoriteMoviesLoading] = useState(true);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addfavoriteMovie = async (item) => {
    const { success } = await addFavorite(
      user.token,
      user.userData.email,
      item
    );
    toast.success("Added to favorites!");
    setFavoriteMovies((prevFavoriteMovies) => [...prevFavoriteMovies, item]);
  };
  const removefavoriteMovie = async (item) => {
    const { success } = await removeFavorite(
      user.token,
      user.userData.email,
      item
    );
    toast.success("Removed from favorites!");
    setFavoriteMovies((prevFavoriteMovies) =>
      prevFavoriteMovies.filter(
        (itm) =>
          JSON.stringify(itm.poster_path) !== JSON.stringify(item.poster_path)
      )
    );
  };

  useEffect(async () => {
    if (allMoviesLoading) {
      const { results } = await getAllMovies();
      setAllMoviesLoading(false);
      setAllMovies(results.results);
    }
  }, [allMoviesLoading]);

  // get latest movies
  useEffect(async () => {
    if (latestMoviesLoading) {
      const { results } = await getLatestMovies();
      setLatestMoviesLoading(false);
      setLatestMovies(results.results);
    }
  }, [latestMoviesLoading]);

  // get popular movies
  useEffect(async () => {
    if (popularMoviesLoading) {
      const { results } = await getPopularMovies();
      setPopularMoviesLoading(false);
      setPopularMovies(results.results);
    }
  }, [popularMoviesLoading]);

  // get favorite movies
  useEffect(async () => {
    if (favoriteMoviesLoading && isLoggedIn) {
      const { results } = await getFavoriteMovies(
        user.token,
        user.userData.email
      );
      setFavoriteMoviesLoading(false);
      setFavoriteMovies(results);
    }
  }, [favoriteMoviesLoading, isLoggedIn]);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} user={user} logout={logout} />
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
              favoriteMovies={favoriteMovies}
              addfavoriteMovie={addfavoriteMovie}
              removefavoriteMovie={removefavoriteMovie}
            />
          )}
        />
        <Route
          path={`${path}/all`}
          component={() => (
            <All
              isLoggedIn={isLoggedIn}
              allMoviesLoading={allMoviesLoading}
              allMovies={allMovies}
              favoriteMovies={favoriteMovies}
              addfavoriteMovie={addfavoriteMovie}
              removefavoriteMovie={removefavoriteMovie}
            />
          )}
        />
        <Route
          path={`${path}/popular`}
          component={() => (
            <Popular
              isLoggedIn={isLoggedIn}
              popularMovies={popularMovies}
              popularMoviesLoading={popularMoviesLoading}
              favoriteMovies={favoriteMovies}
              addfavoriteMovie={addfavoriteMovie}
              removefavoriteMovie={removefavoriteMovie}
            />
          )}
        />
        <Route
          path={`${path}/latest`}
          component={() => (
            <Latest
              isLoggedIn={isLoggedIn}
              latestMovies={latestMovies}
              latestMoviesLoading={latestMoviesLoading}
              favoriteMovies={favoriteMovies}
              addfavoriteMovie={addfavoriteMovie}
              removefavoriteMovie={removefavoriteMovie}
            />
          )}
        />
        <Route
          path={`${path}/favorites`}
          component={() => (
            <Favorites
              isLoggedIn={isLoggedIn}
              favoriteMovies={favoriteMovies}
              favoriteMoviesLoading={favoriteMoviesLoading}
              removefavoriteMovie={removefavoriteMovie}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default Movies;

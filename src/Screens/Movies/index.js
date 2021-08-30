import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navbar from "../../Components/Navbar";

import Discover from "./Discover";
import Favorites from "./Favorites";
import Latest from "./Latest";
import Popular from "./Popular";

const Movies = ({ isLoggedIn, user }) => {
  const { path } = useRouteMatch();
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} user={user} />
      <Switch>
        <Route
          exact
          path={path}
          component={() => <Discover isLoggedIn={isLoggedIn} />}
        />
        <Route
          exact
          path={`${path}/popular`}
          component={() => <Popular isLoggedIn={isLoggedIn} />}
        />
        <Route
          exact
          path={`${path}/latest`}
          component={() => <Latest isLoggedIn={isLoggedIn} />}
        />
        {isLoggedIn && (
          <Route
            exact
            path={`${path}/favorites`}
            component={() => <Favorites />}
          />
        )}
      </Switch>
    </>
  );
};

export default Movies;

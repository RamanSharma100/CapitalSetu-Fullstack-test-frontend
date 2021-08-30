import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Auth from "./Screens/Auth";

import "./App.css";
import Home from "./Screens/Home";
import Movies from "./Screens/Movies";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        {/* home route  */}
        <Route
          exact
          path="/"
          component={() => <Home isLoggedIn={isLoggedIn} user={user} />}
        />
        {/* login route  */}
        <Route
          path="/login"
          component={() => (
            <Auth setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
          )}
        />
        {/* discover route  */}
        <Route
          path="/discover"
          component={() => <Movies isLoggedIn={isLoggedIn} user={user} />}
        />
      </Switch>
    </div>
  );
};

export default App;

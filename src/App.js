import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";

import Auth from "./Screens/Auth";

import "./App.css";
import Home from "./Screens/Home";
import Movies from "./Screens/Movies";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const history = useHistory();

  // logout user

  const logout = () => {
    localStorage.removeItem("mm_profile");
    toast.success("LoggedOut Successfully!");
    setUser(null);
    setIsLoggedIn(false);
    history.push("/");
  };

  //checking login token is expired or not
  useEffect(() => {
    const getUser = localStorage.getItem("mm_profile");

    if (!getUser) {
      setIsLoggedIn(false);
      return setUser(null);
    }

    const decodedToken = jwt_decode(JSON.parse(getUser).token);

    if (decodedToken.exp <= Date.now() / 1000) {
      toast.error("Login session expired! please login again!");
      setIsLoggedIn(false);
      return setUser(null);
    }

    if (!isLoggedIn) {
      setUser(JSON.parse(getUser));
      setIsLoggedIn(true);
      setUser(JSON.parse(getUser));
    }
  }, [window.location.pathname]);

  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        {/* home route  */}
        <Route
          exact
          path="/"
          component={() => (
            <Home isLoggedIn={isLoggedIn} user={user} logout={logout} />
          )}
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
          component={() => (
            <Movies isLoggedIn={isLoggedIn} user={user} logout={logout} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;

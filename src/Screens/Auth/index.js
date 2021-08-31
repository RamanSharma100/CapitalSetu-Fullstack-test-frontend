import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";

import Login from "./Login";
import Register from "./Register";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Auth = ({ setIsLoggedIn, setUser }) => {
  const API_ENDPOINT =
    process.env.React_App_SERVER_API || "http://localhost:5000";
  const [justifyActive, setJustifyActive] = useState("login");

  const history = useHistory();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const registerUser = (email, password, name) => {
    const data = { email, password, name };
    axios(`${API_ENDPOINT}/api/auth/register`, {
      method: "POST",
      data,
    })
      .then((dta) => {
        setJustifyActive("login");
        toast.success("You are registered successfully! please login");
      })
      .catch((err) => toast.error(err.response.data.msg));
    // console.log(user);
  };

  const loginUser = async (email, password) => {
    // setUser(user);
    axios
      .post(`${API_ENDPOINT}/api/auth/login`, {
        email,
        password,
      })
      .then((data) => {
        setIsLoggedIn(true);
        toast.success("You are logged in successfully!");
        localStorage.getItem("mm_profile", JSON.stringify(data.data));
        setUser(data.data);
        history.push("/");
      })
      .catch((err) => toast.error(err.response.data.msg));
    // console.log(user);
  };

  return (
    <MDBRow className="mt-5">
      <h1 className="text-capitalize text-center py-4 fw-bold display-3 text-primary">
        {justifyActive}
      </h1>
      <MDBCol md={4} className="pb-5 mx-auto mt-5">
        <MDBTabs justify className="mb-3 border rounded">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("login")}
              active={justifyActive === "login"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("register")}
              active={justifyActive === "register"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "login"}>
            <Login setIsLoggedIn={setIsLoggedIn} loginUser={loginUser} />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "register"}>
            <Register
              setIsLoggedIn={setIsLoggedIn}
              registerUser={registerUser}
            />
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
  );
};

export default Auth;

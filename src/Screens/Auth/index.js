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

const Auth = ({ setIsLoggedIn, setUser }) => {
  const [justifyActive, setJustifyActive] = useState("login");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const registerUser = async (email, password, name) => {
    setJustifyActive("login");
    toast.success("You are registered successfully! please login");
    // console.log(user);
  };

  const loginUser = async (email, password) => {
    // setUser(user);
    toast.success("You are logged in successfully!");
    // console.log(user);
    setIsLoggedIn(true);
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

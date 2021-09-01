import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

import "./index.css";

const Home = ({ isLoggedIn, user, logout }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} user={user} logout={logout} />
      <MDBContainer fluid style={{ height: "100vh" }} className="home-header">
        <MDBRow className="h-100">
          <MDBCol
            md={12}
            className="d-flex h-100 flex-column text-white  align-items-center justify-content-center"
          >
            <h1 className="display-4 fw-light">
              Welcome To <strong>Movie Mania</strong>
            </h1>
            <p className="lead fs-3 mt-3">One place for all movies</p>
            <Link to="/discover" className="btn btn-outline-white btn-lg mt-5">
              Discover
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;

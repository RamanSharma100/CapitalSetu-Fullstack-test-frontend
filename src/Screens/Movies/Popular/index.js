import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Card from "../../../Components/Card";

import Heading from "../../../Components/Discover/Heading";
import SubLinks from "../../../Components/Discover/SubLinks";

import "./index.css";

const Popular = ({ isLoggedIn, popularMoviesLoading, popularMovies }) => {
  return (
    <MDBContainer>
      <Heading title="Popular Movies" />
      <SubLinks isLoggedIn={isLoggedIn} />

      {popularMoviesLoading ? (
        <MDBRow className="my-5">
          <MDBCol md={12}>
            <h1 className="display-1 text-center">Loading...</h1>
          </MDBCol>
        </MDBRow>
      ) : (
        <MDBRow className="mt-5">
          {popularMovies.map((item, index) => (
            <Card item={item} key={index * item.popularity} />
          ))}
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default Popular;

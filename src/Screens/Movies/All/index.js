import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Card from "../../../Components/Card";

import Heading from "../../../Components/Discover/Heading";
import SubLinks from "../../../Components/Discover/SubLinks";

import "./index.css";

const All = ({ isLoggedIn, allMovies, allMoviesLoading }) => {
  return (
    <MDBContainer>
      <Heading title="All Movies" />
      <SubLinks isLoggedIn={isLoggedIn} />

      {allMoviesLoading ? (
        <MDBRow className="my-5">
          <MDBCol md={12}>
            <h1 className="display-1 text-center">Loading...</h1>
          </MDBCol>
        </MDBRow>
      ) : (
        <MDBRow className="mt-5">
          {allMovies.map((item, index) => (
            <Card item={item} key={index * item.popularity} />
          ))}
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default All;

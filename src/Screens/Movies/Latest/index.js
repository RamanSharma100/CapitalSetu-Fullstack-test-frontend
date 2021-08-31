import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Card from "../../../Components/Card";

import Heading from "../../../Components/Discover/Heading";
import SubLinks from "../../../Components/Discover/SubLinks";

import "./index.css";

const Latest = ({
  isLoggedIn,
  latestMoviesLoading,
  latestMovies,
  favoriteMovies,
  addfavoriteMovie,
}) => {
  return (
    <MDBContainer>
      <Heading title="Latest Movies" />
      <SubLinks isLoggedIn={isLoggedIn} />

      {latestMoviesLoading ? (
        <MDBRow className="my-5">
          <MDBCol md={12}>
            <h1 className="display-1 text-center">Loading...</h1>
          </MDBCol>
        </MDBRow>
      ) : (
        <MDBRow className="mt-5">
          {latestMovies.map((item, index) => (
            <Card
              item={item}
              key={index * item.popularity}
              favorite={
                favoriteMovies.filter(
                  (itm) => JSON.stringify(itm) === JSON.stringify(item)
                ).length > 0
              }
              addfavoriteMovie={addfavoriteMovie}
            />
          ))}
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default Latest;

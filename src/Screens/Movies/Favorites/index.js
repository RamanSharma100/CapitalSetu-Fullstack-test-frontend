import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

import Heading from "../../../Components/Discover/Heading";
import SubLinks from "../../../Components/Discover/SubLinks";
import Card from "../../../Components/Card";

import "./index.css";

const Favorites = ({
  isLoggedIn,
  favoriteMovies,
  favoriteMoviesLoading,
  removefavoriteMovie,
}) => {
  return (
    <MDBContainer>
      <Heading title="Favorite Movies" />
      <SubLinks isLoggedIn={isLoggedIn} />

      {favoriteMoviesLoading ? (
        <MDBRow className="my-5">
          <MDBCol md={12}>
            <h1 className="display-1 text-center">Loading...</h1>
          </MDBCol>
        </MDBRow>
      ) : favoriteMovies.length > 0 ? (
        <MDBRow className="mt-5">
          {favoriteMovies.map((item, index) => (
            <Card
              item={item}
              key={index * item.popularity}
              favorite={true}
              removefavoriteMovie={removefavoriteMovie}
            />
          ))}
        </MDBRow>
      ) : (
        <MDBRow className="my-5">
          <MDBCol md={12}>
            <h1 className="display-1 text-center">No Favorite Movies Found</h1>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default Favorites;

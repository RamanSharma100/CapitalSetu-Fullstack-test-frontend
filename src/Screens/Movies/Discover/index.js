import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

import Heading from "../../../Components/Discover/Heading";
import SubLinks from "../../../Components/Discover/SubLinks";
import MovieCards from "../../../Components/MovieCards";

import "./index.css";

const Discover = ({
  isLoggedIn,
  allMoviesLoading,
  latestMoviesLoading,
  popularMoviesLoading,
  allMovies,
  latestMovies,
  popularMovies,
  favoriteMovies,
  addfavoriteMovie,
  removefavoriteMovie,
}) => {
  return (
    <MDBContainer className="pb-5 mb-5">
      <Heading title="Discover Movies" />
      <SubLinks isLoggedIn={isLoggedIn} />

      {/* all movies  */}
      <MovieCards
        data={allMovies}
        isLoading={allMoviesLoading}
        path="/discover/all"
        heading="All Movies"
        favoriteMovies={favoriteMovies}
        addfavoriteMovie={addfavoriteMovie}
        removefavoriteMovie={removefavoriteMovie}
      />
      {/* popular movies  */}
      <MovieCards
        data={popularMovies}
        isLoading={popularMoviesLoading}
        path="/discover/popular"
        heading="Popular Movies"
        favoriteMovies={favoriteMovies}
        addfavoriteMovie={addfavoriteMovie}
        removefavoriteMovie={removefavoriteMovie}
      />
      {/* latest movies  */}
      <MovieCards
        data={latestMovies}
        isLoading={latestMoviesLoading}
        path="/discover/latest"
        heading="Latest Movies"
        favoriteMovies={favoriteMovies}
        addfavoriteMovie={addfavoriteMovie}
        removefavoriteMovie={removefavoriteMovie}
      />
    </MDBContainer>
  );
};

export default Discover;

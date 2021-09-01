import axios from "axios";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const MovieDescription = ({
  isLoggedIn,
  favoriteMovies,
  addfavoriteMovie,
  removefavoriteMovie,
}) => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (isLoading) {
      const API_KEY = process.env.React_App_Movie_DB_API_KEY;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        )
        .then((res) => {
          setMovieData(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.response.data));
    }
  }, [isLoading]);

  const history = useHistory();

  return (
    <MDBContainer>
      <MDBRow className="mt-5 justify-content-end py-5">
        <MDBCol md={2}>
          <MDBBtn onClick={() => history.goBack()} color="primary">
            Go Back
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      {isLoading ? (
        <MDBRow className="my-5">
          <MDBCol md={12}>
            <h1 className="display-1 py-5 text-center">Loading...</h1>
          </MDBCol>
        </MDBRow>
      ) : (
        <MDBRow className="my-5">
          <MDBCol
            style={{ height: "450px" }}
            md={8}
            className="mx-auto d-flex gap-5 border border-primary p-3 rounded shadow-sm"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              height="100%"
              width="300"
              alt={movieData.original_title}
            />
            <div className="w-100">
              <div className="d-flex py-4 align-items-center justify-content-between">
                <h4 className="text-title fw-bold">
                  {movieData.original_title}
                </h4>
                <p className="badge badge-dark me-5 my-0">
                  Rating: {movieData.vote_average}
                </p>
              </div>
              <div className="d-flex aling-items-center w-100 gap-3">
                <p className="badge badge-primary mb-4 my-0">
                  Release year: {movieData.release_date}
                </p>
                {favoriteMovies.filter(
                  (itm) =>
                    JSON.stringify(itm.poster_path) ===
                    JSON.stringify(movieData.poster_path)
                ).length > 0 ? (
                  <i
                    className="fas fa-heart fs-5 "
                    style={{
                      WebkitTextStroke: "1px #017bf5",
                      color: "#017bf5",
                      cursor: "pointer",
                    }}
                    onClick={() => removefavoriteMovie(movieData)}
                    title="Delete from Favorites"
                  ></i>
                ) : (
                  <i
                    className="fas fa-heart fs-5 text-white"
                    style={{ WebkitTextStroke: "1px #000", cursor: "pointer" }}
                    title="Add to Favorites"
                    onClick={() => addfavoriteMovie(movieData)}
                  ></i>
                )}
              </div>
              <p className="mb-2">Description:-</p>
              <p className="mb-4 small  pe-5 text-justify text-truncated">
                {movieData.overview}
              </p>
              <p className="mb-2">Genres:-</p>
              <div className="d-flex gap-2 pe-5">
                {movieData.genres.map((gener, ind) => (
                  <p
                    key={ind * 9874152}
                    className="text-title badge badge-primary"
                  >
                    {gener.name}
                  </p>
                ))}
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default MovieDescription;

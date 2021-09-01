import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  item,
  index,
  favorite,
  addfavoriteMovie,
  removefavoriteMovie,
}) => {
  return (
    <MDBCard
      border
      className="col-md-3 my-2"
      key={index * item.popularity}
      style={{
        cursor: "pointer !important",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        height="400"
        width="100%"
        alt={item.original_title}
      />
      <MDBCardBody>
        <MDBCardTitle className="text-center small">
          {item.original_title}
        </MDBCardTitle>
        <div className="d-flex py-3 align-items-center justify-content-between">
          <p className="small badge badge-primary">
            Release year: {item.release_date}
          </p>
          <p className="small badge badge-dark">Rating: {item.vote_average}</p>
        </div>
        <p className="small my-0 text-justify" style={{ height: "80px" }}>
          {item.overview.slice(0, 90)}...
        </p>
      </MDBCardBody>
      <MDBCardFooter
        background="white"
        border="0"
        className="d-flex aling-items-center pb-4 justify-content-between"
      >
        <Link to={`/discover/movie/${item.id}`} className="btn btn-primary">
          <i className="fas fa-eye"></i> See More
        </Link>
        <MDBBtn color="transparent" className="shadow-0">
          {favorite ? (
            <i
              className="fas fa-heart fs-5 "
              style={{
                WebkitTextStroke: "1px #017bf5",
                color: "#017bf5",
              }}
              onClick={() => removefavoriteMovie(item)}
              title="Delete from Favorites"
            ></i>
          ) : (
            <i
              className="fas fa-heart fs-5 text-white"
              style={{ WebkitTextStroke: "1px #000" }}
              title="Add to Favorites"
              onClick={() => addfavoriteMovie(item)}
            ></i>
          )}
        </MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  );
};

export default Card;

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// slider arrows
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        zIndex: "10",
        background: "rgba(0 ,0, 0, 0.8)",
        marginRight: "-2%",
        borderRadius: "5px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "80px",
        width: "50px",
        zIndex: "10",
        background: "rgba(0 ,0, 0, 0.8)",
        marginLeft: "-2%",
        borderRadius: "5px",
      }}
      onClick={onClick}
    />
  );
};

// main component

const MovieCards = ({ isLoading, data, heading, path }) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <MDBRow className="mt-5 px-5">
      <MDBCol
        md={12}
        className="d-flex align-items-center py-3 justify-content-between"
      >
        <p className="display-6 ms-2">
          {heading} <hr width="100%" />
        </p>

        <Link to={path} className="btn shadow-sm mb-5 me-3 link-primary">
          See All
        </Link>
      </MDBCol>
      <MDBCol md={12}>
        {isLoading ? (
          <h1 className="text-center py-5">Loading...</h1>
        ) : (
          <Slider {...sliderSettings}>
            {data.map((item, index) => (
              <MDBCard
                border
                className="me-3 "
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
                    <p className="small badge badge-dark">
                      Rating: {item.vote_average}
                    </p>
                  </div>
                  <p
                    className="small my-0 text-justify"
                    style={{ height: "80px" }}
                  >
                    {item.overview.slice(0, 90)}...
                  </p>
                </MDBCardBody>
                <MDBCardFooter
                  background="white"
                  border="0"
                  className="d-flex aling-items-center pb-4 justify-content-between"
                >
                  <Link to="" className="btn btn-primary">
                    <i className="fas fa-eye"></i> See More
                  </Link>
                  <MDBBtn color="transparent" className="shadow-0">
                    <i
                      className="fas fa-heart fs-5 text-white"
                      style={{ WebkitTextStroke: "1px #000" }}
                      title="Add to Favorites"
                    ></i>
                  </MDBBtn>
                </MDBCardFooter>
              </MDBCard>
            ))}
          </Slider>
        )}
      </MDBCol>
    </MDBRow>
  );
};

export default MovieCards;

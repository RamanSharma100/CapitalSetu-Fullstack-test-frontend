import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { NavLink } from "react-router-dom";

const SubLinks = ({ isLoggedIn }) => {
  return (
    <MDBRow>
      <MDBCol md="12" className="text-center">
        <NavLink exact to="/discover" className="btn me-3 btn-outline-primary">
          All
        </NavLink>
        <NavLink
          exact
          to="/discover/popular"
          className="btn me-3 btn-outline-primary"
        >
          Popular
        </NavLink>
        <NavLink
          exact
          to="/discover/latest"
          className="btn me-3 btn-outline-primary"
        >
          Latest
        </NavLink>
        {isLoggedIn && (
          <NavLink
            exact
            to="/discover/favourites"
            className="btn btn-outline-primary"
          >
            Favourites
          </NavLink>
        )}
      </MDBCol>
    </MDBRow>
  );
};

export default SubLinks;

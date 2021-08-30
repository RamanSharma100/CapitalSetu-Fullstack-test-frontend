import React, { useState } from "react";
import {
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";

import "./index.css";

const Navbar = ({ isLoggedIn, user }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <MDBNavbar bgColor="primary" fixed="top" dark expand="lg" className="px-5">
      <MDBContainer fluid>
        <Link to="/" className="link-white navbar-brand ms-5 fw-bold">
          Movie Mania
        </Link>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="mb-2 align-items-center justify-content-end me-5 gap-2 mb-lg-0">
            <MDBNavbarItem>
              <NavLink exact to="/">
                Home
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink exact to="/discover/">
                Discover
              </NavLink>
            </MDBNavbarItem>
            {isLoggedIn ? (
              <>
                <MDBNavbarItem className="ms-3">
                  <p className="my-0 text-white">
                    Welcome, <strong>Raman Sharma</strong>{" "}
                  </p>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBBtn size="sm" className="ms-4" outline color="light">
                    Logout
                  </MDBBtn>
                </MDBNavbarItem>
              </>
            ) : (
              <>
                <MDBNavbarItem>
                  <Link
                    exact
                    to="/login"
                    className="btn btn-outline-light ms-3 btn-sm"
                  >
                    Login
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link
                    exact
                    to="/login"
                    className="btn btn-outline-light btn-sm"
                  >
                    Register
                  </Link>
                </MDBNavbarItem>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;

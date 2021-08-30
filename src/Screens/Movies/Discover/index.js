import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

import Heading from "../../../Components/Discover/Heading";
import SubLinks from "../../../Components/Discover/SubLinks";

import "./index.css";

const Discover = ({ isLoggedIn }) => {
  return (
    <MDBContainer>
      <Heading title="Discover Movies" />
      <SubLinks isLoggedIn={isLoggedIn} />
    </MDBContainer>
  );
};

export default Discover;

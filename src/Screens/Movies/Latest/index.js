import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

import Heading from "../../../Components/Discover/Heading";
import SubLinks from "../../../Components/Discover/SubLinks";

import "./index.css";

const Latest = ({ isLoggedIn }) => {
  return (
    <MDBContainer>
      <Heading title="Latest Movies" />
      <SubLinks isLoggedIn={isLoggedIn} />
    </MDBContainer>
  );
};

export default Latest;

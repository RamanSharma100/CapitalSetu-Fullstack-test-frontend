import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const Heading = ({ title }) => {
  return (
    <MDBRow>
      <MDBCol md="12" className="mt-5">
        <p className="display-3 text-center py-5 text-primary">{title}</p>
      </MDBCol>
    </MDBRow>
  );
};

export default Heading;

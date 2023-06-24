import React from "react";


import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="text-center text-white">
      <MDBContainer className="p-0 pb-0">
        <div className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="mx-3"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="mx-3"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="mx-3"
            href="#!"
            role="button"
          >
       
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="mx-3"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          
        </div>
      </MDBContainer>

      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} <strong>La Voz de Bogota.</strong>
        <br />
        All Rights Reserved
        <a className="text-white" href="https://LaVozDeBogota.com/"></a>
      </div>
    </MDBFooter>
  );
}
export default Footer;

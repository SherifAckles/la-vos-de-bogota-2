import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./footer.css"

function Footer() {
  return (
    <section className="footer bg-black">
      <div className="footer-top text-center ">
        <Container>
          <Row  className="justify-content-center">
            <Col lg={6} md={6} sm={12} className="col-with-padding" >
              <div className="footer-info">
                <h3>La Voz de Bogota</h3>
                <p className="pb-3"><em>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</em></p>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="col-with-padding" >
              <div className="footer-info ">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="text-center">
                &copy; {new Date().getFullYear()} <strong>La Voz de Bogota</strong>. All Rights Reserved
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Footer;

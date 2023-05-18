import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} md={6} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/home">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6} className="footer-links">
              <h4>Contact Us</h4>
              <p>
                PetSafe+
                <br />
                San Jose, CA 95112
                <br />
                United States
                <br />
                <br />
                <strong>Phone:</strong> +1 669 377 6999
                <br />
                <strong>Email:</strong> PetSafe@gmail.com
                <br />
              </p>
            </Col>
            <Col lg={4} md={6} className="footer-info">
              <h3>About PetSafe+</h3>
              <p>
                A convenient platform for pet owners to store their pet's
                information, track vaccination records, and identify the most
                suitable food for their pet, locate nearby shelters during times
                of natural disasters.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Container>
        <div className="footer-bottom">
          <div className="container d-flex justify-content-between">
            <div className="credits">
              Designed by <a href="#">PetSafe+</a>
            </div>
            <div className="copyright">
              &copy; Copyright
              <strong>
                <span>PetSafe+</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </Container> */}
    </footer>
  );
}

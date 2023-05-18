import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
  Carousel,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import banner from "../../images/banner1.jpg";

export default function Main() {
  return (
    <>
      <Container className="py-3">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              alt="First slide"
              style={{ width: "1200px", height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1200x400.png?text=Banner+2"
              alt="Second slide"
              style={{ width: "1200px", height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1200x400.png?text=Banner+3"
              alt="Third slide"
              style={{ width: "1200px", height: "400px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <Col className="d-flex justify-content-center">
          <Button className="mx-5 my-4 btn-lg btn btn-secondary" href="/login">
            Login
          </Button>
          <Button
            className="mx-5 my-4 btn-lg"
            variant="outline-secondary"
            href="/signup"
          >
            Create Account
          </Button>
        </Col>
      </Container>
    </>
  );
}

import { Container, Row, Col, Carousel } from "react-bootstrap";
import banner from "../../images/banner1.jpg";
import PetCard from "./PetProfile/PetCard";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchResult/searchBar";

export default function Home(props) {
  const user = props;
  const petList = useSelector((state) => state.petReducer.petList);
  console.log("petList from useSelector at Home", petList);
  // const [searchResults, setSearchResults] = useState([]);
  const searchResults = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFindFood = async ([petType, petAge, petWeight]) => {
    console.log("handleFindFood Called.");
    try {
      const response = await axios.get(
        `http://localhost:8080/findFoodForPet/${petType}/${petAge}/${petWeight}`
      );
      const searchResult = response.data;
      dispatch({
        type: "SET_SEARCH_RESULT",
        payload: { data: response.data, selectedOption: "food" },
      });
      navigate("/searchResult");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(searchResults);
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
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1200x400.png?text=Banner+3"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        {/* Your pets section */}
      </Container>
      <Container>
        <Row className="my-4 py-5">
          <Col className="d-flex justify-content-center">
            <SearchBar />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Your Pets</h5>
          </Col>
        </Row>
        <Row className="pb-4">
          {petList.map((pet, index) => (
            <PetCard
              key={pet.petId}
              pet={pet}
              handleFindFood={handleFindFood}
            />
          ))}
        </Row>
        <hr />
      </Container>
    </>
  );
}

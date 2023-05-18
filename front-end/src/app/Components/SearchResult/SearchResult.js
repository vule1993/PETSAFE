import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import StoreCard from "./StoreCard";
import { useSelector } from "react-redux";
import SearchBar from "./searchBar";
import ShelterCard from "./ShelterCard";
import FoodCard from "./FoodCard";

export default function SearchResult() {
  const [distanceFilter, setDistanceFilter] = useState(0);
  // const [priceSort, setPriceSort] = useState(null);
  const { searchResult, searchOption } = useSelector(
    (state) => state.searchReducer
  );

  console.log("search option from redux store", searchOption);
  console.log("search option from redux store", searchResult);

  // const searchResults = [];

  // const handleDistanceFilterChange = (event) => {
  //   setDistanceFilter(Number(event.target.value));
  // };

  // const handlePriceSortChange = (event) => {
  //   setPriceSort(event.target.value);
  // };

  // let filteredResults = searchResults.filter(
  //   (result) => result.distance <= distanceFilter
  // );

  return (
    <Container>
      <Row className="my-4 py-5">
        <Col className="d-flex justify-content-center">
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Search Results</h5>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form>
            <Form.Group controlId="formDistance">
              <Form.Label>Distance (miles)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter maximum distance"
                value={distanceFilter}
                // onChange={handleDistanceFilterChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {searchOption === "store" ? (
          searchResult.map((searchResult, index) => (
            <Col lg={12} key={searchResult.foodId}>
              <StoreCard store={searchResult} />
            </Col>
          ))
        ) : searchOption === "shelter" ? (
          searchResult.map((searchResult, index) => (
            <Col lg={12} key={searchResult.shelterId}>
              <ShelterCard shelter={searchResult} />
            </Col>
          ))
        ) : searchOption === "food" ? (
          searchResult.map((searchResult, index) => (
            <Col lg={12} key={searchResult.id}>
              <FoodCard store={searchResult} />
            </Col>
          ))
        ) : (
          <p>No search results found</p>
        )}
      </Row>
      <hr />
    </Container>
  );
}

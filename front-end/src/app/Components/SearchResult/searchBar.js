import React, { useState } from "react";
import {
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [selectedOption, setSelectedOption] = useState("Options");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Zip Code:", zipcode);
    console.log("Option:", selectedOption);

    console.log("search bar Called.");
    try {
      const response = await axios.get(
        `http://localhost:8080/searchLocation/${selectedOption}/${zipcode}`
      );
      const searchResult = response.data;
      dispatch({
        type: "SET_SEARCH_RESULT",
        payload: { data: response.data, selectedOption: selectedOption },
      });
      navigate("/searchResult");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <InputGroup>
          <Form.Control
            style={{ height: "50px", width: "40%", fontWeight: "bold" }}
            type="search"
            id="address"
            placeholder="User's address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <Form.Control
            style={{ height: "50px", width: "20%", fontWeight: "bold" }}
            type="search"
            id="city"
            placeholder="City"
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <Form.Control
            style={{ height: "50px", width: "20%", fontWeight: "bold" }}
            type="search"
            id="zipcode"
            placeholder="Zip Code"
            required
            onChange={(e) => setZipcode(e.target.value)}
          />
          <DropdownButton
            variant="outline-secondary"
            title={selectedOption || "Options"}
            id="input-group-dropdown-1"
            required
            onSelect={(eventKey) => setSelectedOption(eventKey)}
          >
            <Dropdown.Item href="#" id="store" eventKey="store">
              Store
            </Dropdown.Item>
            <Dropdown.Item href="#" id="shelter" eventKey="shelter">
              Shelter
            </Dropdown.Item>
          </DropdownButton>
          <Button variant="primary" type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
      </Form>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
    </>
  );
}

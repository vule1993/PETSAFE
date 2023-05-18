import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PetCard = ({ pet, handleFindFood }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { petId, petName, petType, petAge, petWeight, petImage } = pet;

  const handleFindingFood = async ([petType, petAge, petWeight]) => {
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

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="mx-3" style={{ height: "100%", width: "100%" }}>
        <Card.Img
          variant="top"
          src={petImage}
          style={{ height: "300px", width: "100%" }}
        />
        <Card.Body>
          <Card.Title>{petName}</Card.Title>
          <Card.Text>Breed: {petType}</Card.Text>
          <Card.Text>Age: {petAge}</Card.Text>
          <Card.Text>Weight: {petWeight} lbs</Card.Text>
          <Link
            className="btn btn-primary"
            to="/updatePetProfile"
            state={{ petDetail: pet }}
          >
            More
          </Link>
          <Button
            className="btn btn-secondary mx-1"
            onClick={() => handleFindingFood([petType, petAge, petWeight])}
          >
            Find Food
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PetCard;

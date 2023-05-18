import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePetList } from "../../../store/petActions";

const PetProfile = ({ pets, userId }) => {
  const navigate = useNavigate();
  // const [petList, setPetList] = useState(pets);
  const dispatch = useDispatch();
  const petList = useSelector((state) => state.petReducer.petList);
  console.log(petList);
  const handleAddPet = () => {
    navigate({
      pathname: "/addPet",
    });
  };

  const handleDeletePet = async ([petId, petName]) => {
    try {
      await axios.delete(`http://localhost:8080/deletePet/${petId}`);
      alert(`Successfully delete ${petName} from your pet list`);
      const updatedPetList = petList.filter((pet) => pet.petId !== petId);
      dispatch(updatePetList(updatedPetList));
    } catch (error) {
      console.log(error);
    }
  };
  // const handleFindFood = async ([petType, petAge, petWeight]) => {
  //   console.log("handleFindFood Called.");
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/findFoodForPet/${petType}/${petAge}/${petWeight}`
  //     );
  //     const searchResult = response.data;
  //     console.log(searchResult);
  //     // Do something with the search result, such as showing it in a modal
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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

  const petCards = petList.map((pet, index) => (
    <Col md={6} key={index} style={{ marginBottom: "1rem" }}>
      <Card style={{ height: "100%", width: "100%" }}>
        <Card.Img
          variant="top"
          src={pet.petImage}
          style={{ height: "300px", width: "100%" }}
        />
        <Card.Body>
          <Card.Title>{pet.petName}</Card.Title>
          <Card.Text>Breed: {pet.petType}</Card.Text>
          <Card.Text>Age: {pet.petAge}</Card.Text>
          <Card.Text>Weight: {pet.petWeight} lbs</Card.Text>
          <Link
            className="btn btn-primary"
            to="/updatePetProfile"
            state={{ petDetail: pet }}
          >
            Details
          </Link>
          <Button
            className="btn btn-secondary mx-2"
            onClick={() =>
              handleFindFood([pet.petType, pet.petAge, pet.petWeight])
            }
          >
            Find Food
          </Button>
          <Button
            className="btn btn-danger m-2"
            onClick={() => handleDeletePet([pet.petId, pet.petName])}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  const petCardRows = [];
  for (let i = 0; i < petCards.length; i += 2) {
    const cardRow = (
      <Row key={i / 2} style={{ marginBottom: "1rem" }}>
        {petCards.slice(i, i + 2)}
      </Row>
    );
    petCardRows.push(cardRow);
  }

  return (
    <div>
      <h4>Your Pets</h4>
      <hr />
      {petCardRows}
      <Button onClick={handleAddPet}>Add Pet</Button>
    </div>
  );
};

export default PetProfile;

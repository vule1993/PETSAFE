import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPet } from "../../../store/petActions";

const AddPet = ({ user }) => {
  const dispatch = useDispatch();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petImage, setPetImage] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const userId = user.user.userId;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPet = {
      petName: petName,
      petType: petType,
      petAge: petAge,
      petImage: petImage,
      petWeight: petWeight,
    };
    console.log(newPet);

    try {
      await axios.post(`http://localhost:8080/savePet/${userId}`, newPet);
      setPetName("");
      setPetType("");
      setPetAge("");
      setPetImage("");
      setPetWeight("");
      dispatch(addPet(newPet));
      alert(`Successfully added ${petName} into your pet list`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h4>Add Pet</h4>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="petName">
          <Form.Label>Pet Name</Form.Label>
          <Form.Control
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="petType">
          <Form.Label>Pet Type</Form.Label>
          <Form.Control
            as="select"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            required
          >
            <option value="">Select Pet Type</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="petAge">
          <Form.Label>Pet Age</Form.Label>
          <Form.Control
            as="select"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            required
          >
            <option value="">Select Age</option>
            <option value="Junior">Junior</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="petImage">
          <Form.Label>Pet Image URL</Form.Label>
          <Form.Control
            type="text"
            value={petImage}
            onChange={(e) => setPetImage(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="petWeight">
          <Form.Label>Pet Weight</Form.Label>
          <Form.Control
            type="number"
            value={petWeight}
            onChange={(e) => setPetWeight(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Add Pet
        </Button>
      </Form>
    </div>
  );
};

export default AddPet;

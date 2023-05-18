import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function PetInformation({ petInfo, onSubmit }) {
  const [newName, setNewName] = useState(petInfo.name);
  const [newType, setNewType] = useState(petInfo.type);
  const [newBreed, setNewBreed] = useState(petInfo.breed);
  const [newAge, setNewAge] = useState(petInfo.age);
  const [newWeight, setNewWeight] = useState(petInfo.weight);
  const [newImage, setNewImage] = useState(petInfo.image);
  const petId = petInfo.id;
  const [updateError, setUpdateError] = useState("");
  console.log(petId);

  const handleUpdatePet = (event) => {
    event.preventDefault();
    const updatedPet = {
      petId: petId,
      petName: newName,
      petType: newType,
      petBreed: newBreed,
      petAge: newAge,
      petWeight: newWeight,
      petImage: newImage,
    };
    axios
      .put(`http://localhost:8080/updatePet/${petId}`, updatedPet)
      .then((response) => {
        alert("Successfully Updated The User Information");
      })
      .catch((error) => {
        console.error(error);
        setUpdateError("Failed to update user profile");
      });
    console.log(petInfo);
  };

  return (
    <>
      <h4>Pet Information</h4>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="petType">
          <Form.Label>Pet Type</Form.Label>
          <Form.Control
            as="select"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
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
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            required
          >
            <option value="">Select Age</option>
            <option value="Junior">Junior</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter weight"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="breed">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter breed"
            value={newBreed}
            onChange={(e) => setNewBreed(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
        </Form.Group>
        <Button
          className="my-4"
          variant="primary"
          type="submit"
          onClick={handleUpdatePet}
        >
          Update Pet
        </Button>
      </Form>
    </>
  );
}

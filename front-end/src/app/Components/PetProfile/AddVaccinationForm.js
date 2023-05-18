import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVaccination } from "../../../store/petActions";

export default function AddVaccinationForm() {
  const [vacName, setVacName] = useState("");
  const [vacNumber, setVacNumber] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [vacRecord, setVacRecord] = useState("");
  const [addVaccinationError, setAddVaccinationError] = useState("");
  const dispatch = useDispatch();

  const location = useLocation();
  const { petId } = location.state;
  console.log("addVaccinationForm", petId);

  const handleAddVaccination = (event) => {
    event.preventDefault();
    const newVaccination = {
      vacName: vacName,
      vacNumber: vacNumber,
      expiredDate: expiredDate,
      vacRecord: vacRecord,
      petId: petId,
    };
    axios
      .post(`http://localhost:8080/addVac/${petId}`, newVaccination)
      .then((response) => {
        setVacName("");
        setVacNumber("");
        setExpiredDate("");
        setVacRecord("");
        setAddVaccinationError("");
        alert("Successfully Added A Vaccination Record");
        dispatch(addVaccination(petId, newVaccination));
      })
      .catch((error) => {
        console.error(error);
        setAddVaccinationError("Failed to add vaccination record");
      });
  };

  return (
    <>
      <Container className=" my-5">
        <h2>Add Vaccination</h2>
        <hr />
        {addVaccinationError && (
          <div className="text-danger">{addVaccinationError}</div>
        )}

        <Form onSubmit={handleAddVaccination}>
          <Form.Group controlId="formVacName">
            <Form.Label>Vaccination Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vaccination name"
              value={vacName}
              onChange={(e) => setVacName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formVacNumber">
            <Form.Label>Vaccination Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vaccination number"
              value={vacNumber}
              onChange={(e) => setVacNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formExpiredDate">
            <Form.Label>Expired Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter expired date"
              value={expiredDate}
              onChange={(e) => setExpiredDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formVacRecord">
            <Form.Label>Vaccination Record</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vaccination record"
              value={vacRecord}
              onChange={(e) => setVacRecord(e.target.value)}
            />
          </Form.Group>

          <Button className="my-3" variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    </>
  );
}

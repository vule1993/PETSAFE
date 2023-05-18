import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteVaccination } from "../../../store/petActions";

export default function VaccinationCards({ petInfo }) {
  const petId = petInfo.id;
  const petList = useSelector((state) => state.petReducer.petList);
  const dispatch = useDispatch();

  const pet = petList.find((pet) => pet.petId === petId);
  console.log("pet found", pet);
  const petVaccinations = pet.listVaccination;
  console.log(petVaccinations);

  const handleDeleteVaccination = async ([vacId, vacName]) => {
    try {
      await axios.delete(`http://localhost:8080/deleteVac/${vacId}`);
      alert(`Successfully delete ${vacName} from your pet profile`);
      // const newPetVaccinations = petVaccinations.filter(
      //   (vaccination) => vaccination.vacId !== vacId
      // );
      dispatch(deleteVaccination(petId, vacId));
      // dispatch(updatePetList(petList));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {petVaccinations.map((vaccination, index) => (
        <Card className="my-3" key={vaccination.vacId}>
          <Card.Body>
            <Card.Title>{vaccination.vacName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
            <Card.Text> Vaccination Record: {vaccination.vacRecord}</Card.Text>
            <Card.Text>Vaccination Number: {vaccination.vacNumber}</Card.Text>
            <Card.Text>Expired Date: {vaccination.expiredDate}</Card.Text>
            <Button
              className="mt-3"
              variant="danger"
              onClick={() =>
                handleDeleteVaccination([
                  vaccination.vacId,
                  vaccination.vacName,
                ])
              }
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

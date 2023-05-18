import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PetSidebar from "./PetSidebar";
import PetInformation from "./PetInformation";
import VaccinationCards from "./VaccinationCards";
import { Link } from "react-router-dom";

export default function UpdatePetProfile() {
  const [key, setKey] = useState("petInformation");
  const handleSelect = (k) => {
    setKey(k);
  };
  const location = useLocation();
  const { petDetail } = location.state;
  console.log(petDetail);

  const [petInfo, setPetInfo] = useState({
    id: petDetail.petId,
    name: petDetail.petName,
    type: petDetail.petType,
    breed: petDetail.petBreed,
    age: petDetail.petAge,
    weight: petDetail.petWeight,
    image: petDetail.petImage,
    vaccinations: petDetail.listVaccination,
  });

  console.log("petInfo", petInfo);

  const handleAddVaccination = () => {};

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <PetSidebar onSelect={handleSelect} />
        </Col>
        <Col md={8}>
          {key === "petInformation" && <PetInformation petInfo={petInfo} />}
          {key === "petVaccination" && (
            <>
              <h4>Vaccinations</h4>
              <hr />
              <VaccinationCards petInfo={petInfo} />
              <hr />
              <Link
                className="btn btn-primary"
                to="/addVaccination"
                state={{ petId: petDetail.petId }}
              >
                Add Vaccination
              </Link>{" "}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

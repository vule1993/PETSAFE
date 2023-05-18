import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function ShelterCard({ shelter }) {
  return (
    <Card className="h-60 mx-3 my-2">
      <Row>
        {/* <Col xs={5}>
          <Card.Img variant="top" src={store.image} style={{ width: "100%" }} />
        </Col> */}
        <Col xs={7}>
          <Card.Body>
            <Card.Title>Shelter Name: {shelter.shelterName}</Card.Title>
            <Card.Text>Address: {shelter.shelterAddr}</Card.Text>
            <Card.Text>City: {shelter.shelterCity}</Card.Text>
            <Card.Text>Zip Code: {shelter.shelterZip}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

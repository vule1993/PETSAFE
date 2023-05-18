import { Row, Col, Card } from "react-bootstrap";

import React from "react";

export default function FoodCard({ store }) {
  return (
    <Card className="h-60 mx-3 my-2">
      <Row>
        {/* <Col xs={5}>
          <Card.Img variant="top" src={store.image} style={{ width: "100%" }} />
        </Col> */}
        <Col xs={7}>
          <Card.Body>
            <Card.Title>Branch: {store.foodBranch}</Card.Title>
            <Card.Text>Food Name: {store.foodName}</Card.Text>
            <Card.Text>Description: {store.foodDescription}</Card.Text>
            <Card.Text>For: {store.foodForPetAge} </Card.Text>
            <Card.Text>Pet Weight: {store.foodForPetSize} </Card.Text>
            <Card.Text>Pet Type: {store.foodForPetType}</Card.Text>
            <Card.Text>Price : ${store.foodPrice}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

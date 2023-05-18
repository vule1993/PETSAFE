import { Row, Col, Card } from "react-bootstrap";

import React from "react";

export default function StoreCard({ store }) {
  return (
    <Card className="h-60 mx-3 my-2">
      <Row>
        <Col xs={7}>
          <Card.Body>
            <Card.Title>Store Name: {store.storeName}</Card.Title>
            <Card.Text>Store Address: {store.storeAddr}</Card.Text>
            <Card.Text>City: {store.storeCity}</Card.Text>
            <Card.Text>Zip Code: {store.storeZip} </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

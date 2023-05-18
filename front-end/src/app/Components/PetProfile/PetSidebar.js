import React from "react";
import { ListGroup } from "react-bootstrap";

export default function PetSidebar({ onSelect }) {
  return (
    <ListGroup className="sidebar">
      <ListGroup.Item
        action
        onClick={() => onSelect("petInformation")}
        className="sidebar-item"
      >
        Pet Information
      </ListGroup.Item>
      <ListGroup.Item
        action
        onClick={() => onSelect("petVaccination")}
        className="sidebar-item"
      >
        Pet Vaccination
      </ListGroup.Item>
    </ListGroup>
  );
}

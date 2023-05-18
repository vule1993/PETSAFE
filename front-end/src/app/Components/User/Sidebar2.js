import React from "react";
import { ListGroup } from "react-bootstrap";
import "../../../App.css";

const Sidebar2 = ({ onSelect }) => {
  return (
    <ListGroup className="sidebar">
      <ListGroup.Item
        action
        onClick={() => onSelect("profile")}
        className="sidebar-item"
      >
        Profile
      </ListGroup.Item>
      <ListGroup.Item
        action
        onClick={() => onSelect("petProfile")}
        className="sidebar-item"
      >
        Pet Profile
      </ListGroup.Item>
      <ListGroup.Item
        action
        onClick={() => onSelect("loginSecurity")}
        className="sidebar-item"
      >
        Login & Security
      </ListGroup.Item>
      <ListGroup.Item
        action
        onClick={() => onSelect("support")}
        className="sidebar-item"
      >
        Support
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar2;

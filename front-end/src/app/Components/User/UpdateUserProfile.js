import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UpdateUserProfile({
  userId,
  name,
  address,
  dob,
  email,
  phone,
  password,
  onUpdate,
}) {
  const [newName, setNewName] = useState(name);
  const [newAddress, setNewAddress] = useState(address);
  const [newDOB, setNewDOB] = useState(dob);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newPassword, setNewPassword] = useState(password);
  const [updateError, setUpdateError] = useState("");

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedUser = {
      userId: userId,
      userName: newName,
      userAddress: newAddress,
      userDOB: newDOB,
      userEmail: newEmail,
      userPhone: newPhone,
      userPassword: newPassword,
    };
    axios
      .put(`http://localhost:8080/updateUser/${userId}`, updatedUser)
      .then((response) => {
        onUpdate(response.data);
        setNewName(response.data.userName);
        setNewAddress(response.data.userAddress);
        setNewDOB(response.data.userDOB);
        setNewEmail(response.data.userEmail);
        setNewPhone(response.data.userPhone);
        setNewPassword(response.data.userPassword);
        setUpdateError("");
        alert("Successfully Updated The User Information");
      })
      .catch((error) => {
        console.error(error);
        setUpdateError("Failed to update user profile");
      });
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <hr />
      {updateError && <div className="text-danger">{updateError}</div>}
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of birth"
            value={newDOB}
            onChange={(e) => setNewDOB(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </div>
  );
}

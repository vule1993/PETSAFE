import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const LoginSecurity = ({ email, phone, name, userId, password, address }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [userData, setUserData] = useState({ email, phone });
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    setUserData({ email, phone });
  }, [email, phone]);

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedUser = {
      userId: userId,
      userEmail: newEmail,
      userPhone: newPhone,
      userAddress: address,
      userName: name,
      userPassword: password,
    };
    axios
      .put(`http://localhost:8080/updateUser/${userId}`, updatedUser)
      .then((response) => {
        setUserData({
          email: response.data.userEmail,
          phone: response.data.userPhone,
        });
        setNewEmail(response.data.userEmail);
        setNewPhone(response.data.userPhone);
        setUpdateError("");
        alert("Successfully Updated The User Email and Phone Number");
        setShowUpdateForm(false);
      })
      .catch((error) => {
        console.error(error);
        setUpdateError("Failed to update login and security information");
      });
  };

  const handleCancelUpdate = () => {
    setShowUpdateForm(false);
  };

  return (
    <div>
      {showUpdateForm ? (
        <div>
          <h2>Login & Security</h2>
          <hr />
          {updateError && <div className="text-danger">{updateError}</div>}
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="secondary" onClick={handleCancelUpdate}>
              Cancel
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          <h2>Login & Security</h2>
          <hr />
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <Button onClick={handleUpdateClick}>Update</Button>
        </div>
      )}
    </div>
  );
};

export default LoginSecurity;

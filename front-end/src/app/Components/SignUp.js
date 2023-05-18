import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const user = {
        userEmail: email,
        userPassword: password,
        userName: name,
        userPhone: phone,
      };
      axios
        .post("http://localhost:8080/saveUser", user)
        .then((response) => {
          console.log("User saved:", response.data);
          console.log(user);
          alert("Successfully Signed Up");
          setError(null);
        })

        .catch((error) => {
          console.error("Error saving user:", error);
          setError("Error saving user");
        });
    } else {
      setError("Password does not match");
    }
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form-group">
          <label className="signup-lable" htmlFor="name">
            Name:
          </label>
          <input
            className="signup-input"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
            required
          ></input>
        </div>
        <div className="signup-form-group">
          <label className="signup-lable" htmlFor="username">
            Email:
          </label>
          <input
            className="signup-input"
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
            required
          ></input>
        </div>
        <div className="signup-form-group">
          <label className="signup-lable" htmlFor="phone">
            Phone Number:
          </label>
          <input
            className="signup-input"
            type="number"
            value={phone}
            placeholder="Enter your phone number"
            onChange={(event) => setPhone(event.target.value)}
            required
          ></input>
        </div>
        <div className="signup-form-group">
          <label className="signup-lable" htmlFor="password">
            Password:
          </label>
          <input
            className="signup-input"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
            required
          ></input>
        </div>
        <div className="signup-form-group">
          <label className="signup-lable" htmlFor="confirm-password">
            Confirm Password:
          </label>
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          ></input>
        </div>
        <button className="signup-button" type="submit">
          Create
        </button>
        {error && <div className="signup-error">{error}</div>}
      </form>
    </div>
  );
}

export default SignUp;

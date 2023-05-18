import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPet } from "../../store/petActions";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    axios
      .get(`http://localhost:8080/users/${email}/${password}`)
      .then((response) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data,
          isLoggedIn: true,
        });
        // dispatch(addPetList(response.data.petList));
        const petList = response.data.petList;
        console.log("petList when logged in", petList);
        petList.forEach((pet) => {
          dispatch(addPet(pet));
        });

        alert(`Welcome back ${response.data.userName}`);
        console.log(response.data);
        setUserEmail(response.data.userEmail);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid credentials");
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label className="login-lable" htmlFor="username">
            Email:
          </label>
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label className="login-lable" htmlFor="password">
            Password:
          </label>
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button className="login-button" type="submit">
          Login
        </button>
        {error && <div className="signup-error">{error}</div>}
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../../images/favicon.ico";

export default function Header() {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  console.log("header", user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT_SUCCESS",
      isLoggedIn: false,
    });
  };
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Link to="/home">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            PetSafe+
          </Navbar.Brand>
        </Link>
        <Nav>
          {user && isLoggedIn ? (
            <NavDropdown
              title={`Welcome, ${user.userName}`}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/user">
                User Profile
              </NavDropdown.Item>

              <NavDropdown.Item href="/logout" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown
              title={
                <span>
                  <i className="fal fa-user"></i>Login/Create Account
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Create Account</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

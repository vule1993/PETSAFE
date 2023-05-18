import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "./UserProfile";
import PetProfile from "./PetProfile";
import LoginSecurity from "./LoginSecurity";
import Sidebar2 from "./Sidebar2";
import { useNavigate } from "react-router-dom";
import Support from "../Support";
export default function User(props) {
  const userPass = props;
  console.log("user props", userPass);
  const { user, isLoggedIn } = useSelector((state) => state["user"]);
  const [selected, setSelected] = useState("profile");
  console.log(user);
  const navigate = useNavigate();
  const handleSelect = (selectedKey) => {
    setSelected(selectedKey);
  };

  const renderSelectedComponent = () => {
    if (user && isLoggedIn) {
      // code for rendering the selected component
      switch (selected) {
        case "profile":
          return (
            <UserProfile
              userId={user.userId}
              name={user.userName}
              address={user.userAddress}
              dob={user.userDOB}
              email={user.userEmail}
              password={user.userPassword}
              phone={user.userPhone}
            />
          );
        case "petProfile":
          return <PetProfile pets={user.petList} />;
        case "loginSecurity":
          return (
            <LoginSecurity
              userId={user.userId}
              name={user.userName}
              address={user.userAddress}
              dob={user.userDOB}
              email={user.userEmail}
              password={user.userPassword}
              phone={user.userPhone}
            />
          );
        case "support":
          return <Support />;
        default:
          return <div>Please select an option from the sidebar.</div>;
      }
    } else if (isLoggedIn && !user) {
      return <div>Loading user data...</div>;
    } else {
      alert("Please login to view this page.");
    }
  };

  useEffect(() => {
    if (!isLoggedIn || !user) {
      navigate("/login");
    }
  }, [isLoggedIn, user, navigate]);

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <Sidebar2 onSelect={handleSelect} />
        </Col>
        <Col md={8}>{renderSelectedComponent()}</Col>
      </Row>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import UpdateUserProfile from "./UpdateUserProfile";

export default function UserProfile({
  userId,
  name,
  address,
  dob,
  email,
  password,
  phone,
}) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [userData, setUserData] = useState({ name, address, dob });

  useEffect(() => {
    setUserData({ name, address, dob });
  }, [name, address, dob]);

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  };

  const handleUpdate = (updatedUserInfo) => {
    // Update the user profile information here
    setUserData({
      name: updatedUserInfo.userName,
      address: updatedUserInfo.userAddress,
      dob: updatedUserInfo.userDOB,
    });

    // Hide the update form
    setShowUpdateForm(false);
  };

  return (
    <div>
      {showUpdateForm ? (
        <UpdateUserProfile
          userId={userId}
          name={name}
          address={address}
          dob={dob}
          email={email}
          password={password}
          phone={phone}
          onUpdate={handleUpdate}
        />
      ) : (
        <>
          <h2>Profile</h2>
          <hr />
          <p>Name: {userData.name}</p>
          <p>Address: {userData.address}</p>
          <p>Date of Birth: {userData.dob}</p>
          <Button onClick={handleUpdateClick}>Update</Button>
        </>
      )}
    </div>
  );
}

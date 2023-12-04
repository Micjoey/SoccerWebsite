import React from "react";
import { useUser } from "./UserContext"; // Import the useUser hook
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const { userInfo } = useUser(); // Use the useUser hook to access user data
  console.log(userInfo);
  return (
    <Container>
      <Row>
        <Col>
          {userInfo ? (
            <h2>Welcome {userInfo.name}</h2>
          ) : (
            <p>User data not available</p>
          )}
        </Col>
      </Row>
      {/* ... rest of your profile component */}
    </Container>
  );
};

export default Profile;

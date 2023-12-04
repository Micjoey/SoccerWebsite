import React from "react";
import { useUser } from "./UserContext"; // Import the useUser hook
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const { user } = useUser(); // Use the useUser hook to access user data

  return (
    <Container>
      <Row>
        <Col>
          {user ? <h2>Welcome {user.name}</h2> : <p>User data not available</p>}
        </Col>
      </Row>
      {/* ... rest of your profile component */}
    </Container>
  );
};

export default Profile;

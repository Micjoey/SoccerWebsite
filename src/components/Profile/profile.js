import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const userInfo = sessionStorage.getItem("userInfo");
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

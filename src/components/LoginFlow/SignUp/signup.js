import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./SignUpScreen.scss"; // Ensure this SCSS file is created and compiled to CSS

const SignUpScreen = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    contactPreference: "email",
    name: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Error in form submission");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      localStorage.setItem("soccer_website_session_id", result.token);

      // Additional logic after successful signup (e.g., redirecting the user)
    } catch (error) {
      console.error("Form submission error:", error.message);
      // Handle errors (e.g., show an error message to the user)
    }
  };

  const handleAutofill = () => {
    // Simulate autofilling data
    setUserData({
      username: "autofilledUsername",
      password: "autofilledPassword",
      email: "autofilled@email.com",
      phone: "123-456-7890",
      contactPreference: "phone",
      name: "Autofilled Name",
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} className="signup-form">
            <h1 className="text-center mb-4">Sign Up</h1>

            {/* Username */}
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Phone */}
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Contact Preference */}
            <fieldset className="mb-3">
              <Form.Group>
                <Form.Label>Contact Preference</Form.Label>
                <Form.Check
                  type="radio"
                  label="Email"
                  name="contactPreference"
                  value="email"
                  checked={userData.contactPreference === "email"}
                  onChange={handleChange}
                  id="contactPreferenceEmail"
                />
                <Form.Check
                  type="radio"
                  label="Phone"
                  name="contactPreference"
                  value="phone"
                  checked={userData.contactPreference === "phone"}
                  onChange={handleChange}
                  id="contactPreferencePhone"
                />
              </Form.Group>
            </fieldset>

            {/* Name */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>

            {/* Autofill Button */}
            <Button
              variant="secondary"
              onClick={handleAutofill}
              className="w-100 mt-3"
            >
              Autofill
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpScreen;

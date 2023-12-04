import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.scss";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const { token, user } = data;
        localStorage.setItem("token", token);
        // Update user state or navigate to a protected route
        console.log(token, user);
        if (user) {
          window.location = "/";
        }
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Login</h1>
      <Form onSubmit={handleSubmit} className="login-form">
        {/* Email Field */}
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control-lg"
          />
        </Form.Group>

        {/* Password Field */}
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control-lg"
          />
        </Form.Group>

        {/* Login Button */}
        <Button variant="primary" type="submit" className="btn-lg btn-block">
          Login
        </Button>

        {/* Sign Up Button */}
        <Link
          to="/signup"
          className="btn btn-outline-primary btn-lg btn-block mt-3"
        >
          Sign Up
        </Link>
      </Form>
    </div>
  );
};

export default LoginScreen;

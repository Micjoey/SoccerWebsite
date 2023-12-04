import jwt from "jsonwebtoken";
import { JWT_TOKEN_KEY } from "../routes/login/authController.js";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization; // Assuming the token is sent in the "Authorization" header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Token not provided." });
  }
  jwt.verify(token.split(" ")[1], JWT_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Invalid token." });
    }

    // // If the token is valid, you can optionally attach the decoded user information to the request
    // req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  });
};

export default verifyToken;

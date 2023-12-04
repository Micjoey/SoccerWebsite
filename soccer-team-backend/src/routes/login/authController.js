import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getSecret } from "../../../utils/getAwsSecret.js";

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const User = req.db.User; // Access the User model from req.db

      console.log("Attempting to find user with email:", email);

      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log("User not found.");
        return res
          .status(401)
          .json({ message: "Authentication failed. User not found." });
      }

      console.log("User found:", user.toJSON());

      if (!bcrypt.compareSync(password, user.password)) {
        console.log("Wrong password.");
        return res
          .status(401)
          .json({ message: "Authentication failed. Wrong password." });
      }

      console.log("Password matched.");

      const token = jwt.sign({ userId: user.id }, getSecret("jwt_token"), {
        expiresIn: "1h",
      });

      console.log("Authentication successful.");

      res.json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
      console.error("Error occurred during login:", error);
      res
        .status(500)
        .json({ message: "There was a problem logging in.", error: error });
    }
  },

  async signup(req, res) {
    try {
      const { email, password } = req.body;
      const User = req.db.User; // Access the User model from req.db

      console.log("Received signup request for email:", email);

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const newUser = await User.create({ email, password: hashedPassword });

      console.log("Signup successful.");

      res.json({ message: "Signup successful." });
    } catch (error) {
      console.error("Error occurred during signup:", error);
      res
        .status(500)
        .json({ message: "There was a problem signing up.", error: error });
    }
  },
};

export default authController;

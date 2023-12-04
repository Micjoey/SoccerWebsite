import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../../../models/user.js";
import { getSecret } from "../../../utils/getAwsSecret.js";

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Authentication failed. User not found." });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return res
          .status(401)
          .json({ message: "Authentication failed. Wrong password." });
      }
      const token = jwt.sign({ userId: user.id }, getSecret("jwt_token"), {
        expiresIn: "1h",
      });
      res.json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
      res
        .status(500)
        .json({ message: "There was a problem logging in.", error: error });
    }
  },

  async signup(req, res) {
    try {
      const { email, password } = req.body;
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      print("Starting create");
      const newUser = await User.create({ email, password: hashedPassword });
      print("Starting create", newUser);

      res.json({ message: "Signup successful." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "There was a problem signing up.", error: error });
    }
  },
};

export default authController;

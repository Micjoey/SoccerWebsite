import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const JWT_TOKEN_KEY = "soccerwebapp_jwt_password";

export const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const User = req.db.User; // Access the User model from req.db

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

      const token = jwt.sign({ userId: user.id }, JWT_TOKEN_KEY, {
        expiresIn: "1h",
      });

      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
        },
      });
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

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const newUser = await User.create({ email, password: hashedPassword });

      res.json({ message: "Signup successful." });
    } catch (error) {
      console.error("Error occurred during signup:", error);
      res
        .status(500)
        .json({ message: "There was a problem signing up.", error: error });
    }
  },
};

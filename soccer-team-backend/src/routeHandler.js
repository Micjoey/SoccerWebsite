import scheduleRouter from "./routes/scheduleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";
import gameRouter from "./routes/gameRouter.js";
import authRouter from "./routes/login/authRoutes.js";
import userRouter from "./routes/userRouter.js";
import verifyToken from "./middleware/authMiddleware.js";

const setupRoutes = (app) => {
  // Public routes (no authentication required)
  app.use("/api", authRouter);

  // Protected routes (authentication required)
  app.use("/api/users", verifyToken, userRouter);
  app.use("/api/schedule", verifyToken, scheduleRouter);
  app.use("/api/ranking", verifyToken, rankingRouter);
  app.use("/api/games", verifyToken, gameRouter);
};

export default setupRoutes;

// setupRoutes.js

import scheduleRouter from "./routes/scheduleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";
import gameRouter from "./routes/gameRouter.js";
import authRouter from "./routes/login/authRoutes.js";
import userRouter from "./routes/userRouter.js";

const setupRoutes = (app) => {
  app.use("/api", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/schedule", scheduleRouter);
  app.use("/api/ranking", rankingRouter);
  app.use("/api/games", gameRouter);
};

export default setupRoutes;

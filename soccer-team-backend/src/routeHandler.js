// src/routeHandler.js

import scheduleRouter from "./routes/scheduleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";
import gameRouter from "./routes/gameRouter.js";
import loginRouter from "./routes/login/authRoutes.js";

const setupRoutes = (app) => {
  app.use("/", loginRouter);
  app.use("/", scheduleRouter);
  app.use("/", rankingRouter);
  app.use("/games", gameRouter);
};

export default setupRoutes;

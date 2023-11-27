// src/routeHandler.js

import scheduleRouter from "./routes/scheduleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";
import gameRouter from "./routes/gameRouter.js";
import adminTaskRouter from "./routes/adminTaskRouter.js";

const setupRoutes = (app) => {
  app.use("/", scheduleRouter);
  app.use("/", rankingRouter);
  app.use("/games", gameRouter);
  app.use("/admintasks", adminTaskRouter);
};

export default setupRoutes;

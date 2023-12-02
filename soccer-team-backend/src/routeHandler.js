// src/routeHandler.js

import scheduleRouter from "./routes/scheduleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";
import gameRouter from "./routes/gameRouter.js";
import playerRouter from "./routes/playerRouter.js";

const setupRoutes = (app) => {
  app.use("/", scheduleRouter);
  app.use("/", rankingRouter);
  app.use("/games", gameRouter);
  app.use("/players", playerRouter);
};

export default setupRoutes;

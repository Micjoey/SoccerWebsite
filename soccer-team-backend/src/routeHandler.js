import scheduleRouter from "./routes/scheduleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";
import gameRouter from "./routes/gameRouter.js";
import authRouter from "./routes/login/authRoutes.js";
import userRouter from "./routes/userRouter.js";
import verifyToken from "./middleware/authMiddleware.js";

function applyRoute(app, route) {
  if (route.isProtected) {
    app.use(route.path, [verifyToken, route.router]);
  } else {
    app.use(route.path, route.router);
  }
}

const setupRoutes = (app) => {
  const routes = [
    { path: "/api", router: authRouter, isProtected: false },
    { path: "/api/users", router: userRouter, isProtected: true },
    { path: "/api/schedule", router: scheduleRouter, isProtected: true },
    { path: "/api/ranking", router: rankingRouter, isProtected: true },
    { path: "/api/games", router: gameRouter, isProtected: true },
  ];

  routes.forEach((route) => applyRoute(app, route));
};

export default setupRoutes;

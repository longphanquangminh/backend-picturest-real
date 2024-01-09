import { AuthController } from "../controller/AuthController";
import { routeType } from "../types/routeType";

export const authRoutes: routeType[] = [
  {
    method: "post",
    route: "/login",
    controller: AuthController,
    action: "login",
  },
  {
    method: "post",
    route: "/register",
    controller: AuthController,
    action: "register",
  },
];

import { NguoiDungController } from "../controller/NguoiDungController";
import { routeType } from "../types/routeType";
import upload from "../config/upload";

export const nguoiDungRoutes: routeType[] = [
  {
    method: "get",
    route: "/users/:userId",
    controller: NguoiDungController,
    action: "findUser",
  },
  {
    method: "put",
    route: "/users/:userId",
    controller: NguoiDungController,
    action: "editUserInfo",
    middleware: upload.single("file"),
  },
  {
    method: "post",
    route: "/users/avatar/:userId",
    controller: NguoiDungController,
    action: "editUserAvatar",
    middleware: upload.single("file"),
  },
];

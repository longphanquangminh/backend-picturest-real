import { BinhLuanController } from "../controller/BinhLuanController";
import { routeType } from "../types/routeType";

export const binhLuanRoutes: routeType[] = [
  {
    method: "get",
    route: "/comments/:pictureId",
    controller: BinhLuanController,
    action: "getCommentsByPictureId",
  },
  {
    method: "post",
    route: "/comments/:pictureId",
    controller: BinhLuanController,
    action: "postComment",
  },
];

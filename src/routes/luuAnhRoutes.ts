import { LuuAnhController } from "../controller/LuuAnhController";
import { routeType } from "../types/routeType";

export const luuAnhRoutes: routeType[] = [
  {
    method: "get",
    route: "/saved/:pictureId",
    controller: LuuAnhController,
    action: "checkImageSaved",
  },
  {
    method: "post",
    route: "/saved/:pictureId",
    controller: LuuAnhController,
    action: "postSave",
  },
  {
    method: "get",
    route: "/saved-by-user/:userId",
    controller: LuuAnhController,
    action: "getSavedPicturesByUser",
  },
];

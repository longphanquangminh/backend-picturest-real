import { HinhAnhController } from "../controller/HinhAnhController";
import { routeType } from "../types/routeType";
import upload from "../config/upload";

export const hinhAnhRoutes: routeType[] = [
  {
    method: "get",
    route: "/pictures",
    controller: HinhAnhController,
    action: "getPictures",
  },
  {
    method: "get",
    route: "/pictures/search-by-name/:pictureName",
    controller: HinhAnhController,
    action: "getPicturesByName",
  },
  {
    method: "get",
    route: "/pictures/:pictureId",
    controller: HinhAnhController,
    action: "getPicturesById",
  },
  {
    method: "get",
    route: "/created-by-user/:userId",
    controller: HinhAnhController,
    action: "getCreatedPicturesByUser",
  },
  {
    method: "delete",
    route: "/pictures/:pictureId",
    controller: HinhAnhController,
    action: "deletePicture",
  },
  {
    method: "post",
    route: "/pictures",
    controller: HinhAnhController,
    action: "postPicture",
    middleware: [upload.single("file")],
  },
];

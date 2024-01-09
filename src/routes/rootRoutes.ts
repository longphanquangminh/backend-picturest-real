import { routeType } from "../types/routeType";
import { authRoutes } from "./authRoutes";
import { nguoiDungRoutes } from "./nguoiDungRoutes";
import { hinhAnhRoutes } from "./hinhAnhRoutes";
import { luuAnhRoutes } from "./luuAnhRoutes";
import { binhLuanRoutes } from "./binhLuanRoutes";

export const rootRoutes: routeType[] = [...authRoutes, ...nguoiDungRoutes, ...hinhAnhRoutes, ...luuAnhRoutes, ...binhLuanRoutes];

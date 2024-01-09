import "reflect-metadata";
import { DataSource } from "typeorm";
import { NguoiDung } from "./entity/NguoiDung";
import { HinhAnh } from "./entity/HinhAnh";
import { LuuAnh } from "./entity/LuuAnh";
import { BinhLuan } from "./entity/BinhLuan";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "picturest",
  synchronize: true,
  logging: false,
  entities: [NguoiDung, HinhAnh, LuuAnh, BinhLuan],
  migrations: [],
  subscribers: [],
});

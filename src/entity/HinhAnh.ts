import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsString, MaxLength, IsNumber, Matches } from "class-validator";

import { BinhLuan } from "./BinhLuan";
import { NguoiDung } from "./NguoiDung";
import { LuuAnh } from "./LuuAnh";

@Entity("hinh_anh")
export class HinhAnh {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column("varchar", { name: "mo_ta", length: 255 })
  moTa: string;

  @PrimaryGeneratedColumn({ type: "int", name: "hinh_id" })
  hinhId: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Matches(/^.*\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i, { message: "Invalid image path" })
  @Column("varchar", { name: "duong_dan", length: 255 })
  duongDan: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column("varchar", { name: "ten_hinh", length: 255 })
  tenHinh: string;

  @OneToMany(() => BinhLuan, binhLuan => binhLuan.hinh)
  binhLuans: BinhLuan[];

  @ManyToOne(() => NguoiDung, nguoiDung => nguoiDung.hinhAnhs)
  @JoinColumn([{ name: "nguoi_dung_id", referencedColumnName: "nguoiDungId" }])
  nguoiDung: NguoiDung;

  @OneToMany(() => LuuAnh, luuAnh => luuAnh.hinh)
  luuAnhs: LuuAnh[];
}

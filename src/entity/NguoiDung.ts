import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsOptional, IsString, MaxLength, IsEmail, MinLength, Matches } from "class-validator";

import { BinhLuan } from "./BinhLuan";
import { HinhAnh } from "./HinhAnh";
import { LuuAnh } from "./LuuAnh";

@Entity("nguoi_dung")
export class NguoiDung {
  @PrimaryGeneratedColumn({ type: "integer", name: "nguoi_dung_id" })
  nguoiDungId: number;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @Matches(/^.*\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i, { message: "Invalid image path" })
  @Column("varchar", { name: "anh_dai_dien", nullable: true, length: 255 })
  anhDaiDien: string | null;

  @IsNumber()
  @Column("int", { name: "tuoi" })
  tuoi: number;

  @IsString()
  @MinLength(6, {
    message: "Mật khẩu phải có tối thiểu 6 ký tự!",
  })
  @MaxLength(255)
  @Column("varchar", { name: "mat_khau", length: 255 })
  matKhau: string;

  @IsString()
  @MaxLength(255)
  @Column("varchar", { name: "ho_ten", length: 255 })
  hoTen: string;

  @IsEmail()
  @MaxLength(255)
  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @OneToMany(() => BinhLuan, binhLuan => binhLuan.nguoiDung)
  binhLuans: BinhLuan[];

  @OneToMany(() => HinhAnh, hinhAnh => hinhAnh.nguoiDung)
  hinhAnhs: HinhAnh[];

  @OneToMany(() => LuuAnh, luuAnh => luuAnh.nguoiDung)
  luuAnhs: LuuAnh[];
}

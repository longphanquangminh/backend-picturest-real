import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsDate } from "class-validator";

import { NguoiDung } from "./NguoiDung";
import { HinhAnh } from "./HinhAnh";

@Entity("luu_anh")
export class LuuAnh {
  @IsDate()
  @Column("date", { name: "ngay_luu" })
  ngayLuu: Date;

  @PrimaryGeneratedColumn({ type: "int", name: "luu_anh_id" })
  luuAnhId: number;

  @ManyToOne(() => NguoiDung, nguoiDung => nguoiDung.luuAnhs)
  @JoinColumn([{ name: "nguoi_dung_id", referencedColumnName: "nguoiDungId" }])
  nguoiDung: NguoiDung;

  @ManyToOne(() => HinhAnh, hinhAnh => hinhAnh.luuAnhs)
  @JoinColumn([{ name: "hinh_id", referencedColumnName: "hinhId" }])
  hinh: HinhAnh;
}

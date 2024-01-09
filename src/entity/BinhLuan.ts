import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsDate, IsNotEmpty, IsString, MaxLength, IsNumber } from "class-validator";
import { NguoiDung } from "./NguoiDung";
import { HinhAnh } from "./HinhAnh";

@Entity("binh_luan")
export class BinhLuan {
  @IsDate()
  @Column("date", { name: "ngay_binh_luan" })
  ngayBinhLuan: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column("varchar", { name: "noi_dung", length: 255 })
  noiDung: string;

  @PrimaryGeneratedColumn({ type: "int", name: "binh_luan_id" })
  binhLuanId: number;

  @ManyToOne(() => NguoiDung, nguoiDung => nguoiDung.binhLuans)
  @JoinColumn([{ name: "nguoi_dung_id", referencedColumnName: "nguoiDungId" }])
  nguoiDung: NguoiDung;

  @ManyToOne(() => HinhAnh, hinhAnh => hinhAnh.binhLuans)
  @JoinColumn([{ name: "hinh_id", referencedColumnName: "hinhId" }])
  hinh: HinhAnh;
}

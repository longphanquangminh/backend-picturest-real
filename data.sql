DROP DATABASE IF EXISTS picturest;
CREATE DATABASE picturest;
USE picturest;

DROP TABLE IF EXISTS nguoi_dung;
CREATE TABLE nguoi_dung (
  nguoi_dung_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  mat_khau VARCHAR(255) NOT NULL,
  ho_ten VARCHAR(255) NOT NULL,
  tuoi INT NOT NULL,
  anh_dai_dien VARCHAR(255)
);

INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien)
VALUES
  ('user1@example.com', 'password1', 'John Doe', 25, 'avatar1.jpg'),
  ('user2@example.com', 'password2', 'Jane Smith', 30, 'avatar2.jpg'),
  ('user3@example.com', 'password3', 'Bob Johnson', 22, 'avatar3.jpg');


DROP TABLE IF EXISTS hinh_anh;
CREATE TABLE hinh_anh (
  hinh_id INT AUTO_INCREMENT PRIMARY KEY,
  ten_hinh VARCHAR(255) NOT NULL,
  duong_dan VARCHAR(255) NOT NULL,
  mo_ta VARCHAR(255) NOT NULL,
  nguoi_dung_id INT NOT NULL,
  FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)
);

INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id)
VALUES
  ('Image1', '/images/image1.jpg', 'Description for Image 1', 1),
  ('Image2', '/images/image2.jpg', 'Description for Image 2', 2),
  ('Image3', '/images/image3.jpg', 'Description for Image 3', 3);


DROP TABLE IF EXISTS luu_anh;
CREATE TABLE luu_anh (
  luu_anh_id INT AUTO_INCREMENT PRIMARY KEY,
  nguoi_dung_id INT NOT NULL,
  hinh_id INT NOT NULL,
  ngay_luu DATE NOT NULL,
  FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
  FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id)
);

INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu)
VALUES
  (1, 1, '2023-01-01'),
  (2, 2, '2023-01-02'),
  (3, 3, '2023-01-03');


DROP TABLE IF EXISTS binh_luan;
CREATE TABLE binh_luan (
  binh_luan_id INT AUTO_INCREMENT PRIMARY KEY,
  nguoi_dung_id INT NOT NULL,
  hinh_id INT NOT NULL,
  ngay_binh_luan DATE NOT NULL,
  noi_dung VARCHAR(255) NOT NULL,
  FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
  FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id)
);

INSERT INTO binh_luan (nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung)
VALUES
  (1, 1, '2023-01-01', 'Great photo!'),
  (2, 2, '2023-01-02', 'Nice shot!'),
  (3, 3, '2023-01-03', 'Beautiful picture!');

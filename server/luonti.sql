CREATE DATABASE IF NOT EXISTS UrheilijatDB;
USE UrheilijatDB;

CREATE TABLE Urheilijat (
  id INT AUTO_INCREMENT PRIMARY KEY,
  etunimi VARCHAR(50) NOT NULL,
  sukunimi VARCHAR(50) NOT NULL,
  kutsumanimi VARCHAR(50),
  syntymavuosi DATE,
  paino FLOAT,
  kuvaLinkki VARCHAR(200),
  laji VARCHAR(50),
  saavutukset TEXT
);

INSERT INTO Urheilijat (etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuvaLinkki, laji, saavutukset) VALUES
('Matti', 'Nykänen', 'Masa', '1963-07-17', 75.0, 'https://fi.wikipedia.org/wiki/Matti_Nyk%C3%A4nen#/media/Tiedosto:Matti_Nyk%C3%A4nen_2014-01-30_001.jpg', 'Mäkihyppy', '14 kultaa, 4 hopeaa, 8 pronssia'),

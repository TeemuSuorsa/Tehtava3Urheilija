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
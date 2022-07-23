DROP DATABASE IF EXISTS `db`;
CREATE DATABASE `db`;
USE `db`;

CREATE TABLE `customers` (
  `codCliente` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `saldo` FLOAT,
  `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
  `updated_at` DATETIME(3) NULL ON UPDATE NOW(3)
);

CREATE TABLE `assets` (
  `codAtivo` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `valorAtivo` FLOAT NOT NULL,
  `qtdAtivoDisponivel` INT NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
  `updated_at` DATETIME(3) NULL ON UPDATE NOW(3)
);

CREATE TABLE `operation` (
  `codOperacao` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `descricao` VARCHAR(10) NOT NULL
);

CREATE TABLE `transactionSqDep` (
  `codTransacaoSD` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `codCliente` INT NOT NULL,
  `valor` FLOAT NOT NULL,
  `tipoTransacaoSD` INT NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
  `updated_at` DATETIME(3) NULL ON UPDATE NOW(3),
  FOREIGN KEY (`codCliente`) REFERENCES `customers` (`codCliente`) ON DELETE CASCADE,
  FOREIGN KEY (`tipoTransacaoSD`) REFERENCES `operation` (`codOperacao`) ON DELETE CASCADE
);

CREATE TABLE `transactionAssets` (
  `codTransacaoCV` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `codCliente` INT NOT NULL,
  `codAtivo` INT NOT NULL,
  `qtdAtivo` INT NOT NULL,
  `tipoTransacaoCV` INT NOT NULL,
  `valorTotTransacao` FLOAT NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
  `updated_at` DATETIME(3) NULL ON UPDATE NOW(3),
  FOREIGN KEY (`codCliente`) REFERENCES `customers` (`codCliente`) ON DELETE CASCADE,
  FOREIGN KEY (`codAtivo`) REFERENCES `assets` (`codAtivo`) ON DELETE CASCADE,
  FOREIGN KEY (`tipoTransacaoCV`) REFERENCES `operation` (`codOperacao`) ON DELETE CASCADE
);

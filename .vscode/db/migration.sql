DROP DATABASE IF EXISTS `db`;
CREATE DATABASE `db`;
USE `db`;

CREATE TABLE `customers` (
  `cod_cliente` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `saldo` FLOAT,
  `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
  `updated_at` DATETIME(3) NULL ON UPDATE NOW(3)
);

CREATE TABLE `assets` (
  `cod_ativo` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `valor_ativo` FLOAT NOT NULL,
  `qtd_ativo_disponivel` INT NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
  `updated_at` DATETIME(3) NULL ON UPDATE NOW(3)
);

CREATE TABLE `transaction_sq/dep` (
  `cod_transacaoSD` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `cod_cliente` INT NOT NULL,
  `character_id` INT NOT NULL,
  `tipo_transacaoSD` VARCHAR(8) NOT NULL,
  FOREIGN KEY (`cod_cliente`) REFERENCES `customers` (`cod_cliente`) ON DELETE CASCADE,
);

CREATE TABLE `transaction_assets` (
  `cod_transacaoCV` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `cod_cliente` INT NOT NULL,
  `cod_ativo` INT NOT NULL,
  `qtd_ativo_CV` INT NOT NULL,
  `tipo_transacaoCV` VARCHAR(6) NOT NULL,
  `valor_tot_transacao` FLOAT NOT NULL,
  FOREIGN KEY (`cod_cliente`) REFERENCES `customers` (`cod_cliente`) ON DELETE CASCADE,
  FOREIGN KEY (`cod_ativo`) REFERENCES `assets` (`cod_ativo`) ON DELETE CASCADE
);

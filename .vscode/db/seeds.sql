USE `db`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `customers`;
TRUNCATE TABLE `assets`;
TRUNCATE TABLE `transactionSqDep`;
TRUNCATE TABLE `transactionAssets`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO  `customers` (`codCliente`, `password`, `saldo`) VALUES 
  (1, 123456, 1000.00),
  (2, 1234567, 5000.00),
  (3, 12345678, 2000.00),
  (4, 123456789, 1000.00),
  (5, 1234567890, 500.00);

INSERT INTO `assets` (`codAtivo`, `valorAtivo`, `qtdAtivoDisponivel`) VALUES
  (1, 10.00, 100),
  (2, 50.00, 80),
  (3, 100.00, 50),
  (4, 200.00, 500),
  (5, 300.00, 10),
  (6, 500.00, 50);

INSERT INTO  `operation` (`codOperacao`, `descricao`) VALUES 
  (1, 'Saque'),
  (2, 'Depósito'),
  (3, 'Compra'),
  (4, 'Venda');

INSERT INTO  `transactionSqDep` (`codTransacaoSD`, `codCliente`, `valor`, `tipoTransacaoSD`) VALUES 
  (1, 1, 50.00, 2),
  (2, 2, 50.00, 1),
  (3, 3, 50.00, 2),
  (4, 4, 50.00, 1),
  (5, 4, 100.00, 2);

INSERT INTO `transactionAssets` (`codTransacaoCV`, `codCliente`, `codAtivo`, `qtdAtivo`, `tipoTransacaoCV`, `valorTotTransacao`) VALUES
  (1, 1, 1, 5, 3, 100.00),
  (2, 2, 3, 10, 4, 500.00),
  (3, 3, 4, 5, 3, 500.00),
  (4, 4, 4, 10, 4, 1000.00),
  (5, 3, 5, 5, 3, 400.00);
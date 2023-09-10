-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10-Set-2023 às 21:12
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tpc_challange`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_apolice`
--

CREATE TABLE `tb_hl_apolice` (
  `id_apolice` int(11) NOT NULL,
  `id_veiculo` int(11) DEFAULT NULL,
  `status_apolice` char(1) DEFAULT NULL,
  `valor_apolice` decimal(7,2) DEFAULT NULL,
  `vigencia_apolice` date DEFAULT NULL,
  `placa_veiculo` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_apolice`
--

INSERT INTO `tb_hl_apolice` (`id_apolice`, `id_veiculo`, `status_apolice`, `valor_apolice`, `vigencia_apolice`, `placa_veiculo`) VALUES
(1, 1, 'A', '1000.00', '2023-09-30', 'ABC1234'),
(2, 2, 'A', '1200.00', '2023-10-15', 'XYZ5678');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_cliente`
--

CREATE TABLE `tb_hl_cliente` (
  `id_cliente` int(11) NOT NULL,
  `nome_cliente` varchar(40) DEFAULT NULL,
  `endereco_cliente` varchar(40) DEFAULT NULL,
  `telefone_cliente` varchar(11) DEFAULT NULL,
  `tipo_cliente` varchar(20) DEFAULT NULL,
  `cpf_cnpj_cliente` varchar(18) DEFAULT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_cliente`
--

INSERT INTO `tb_hl_cliente` (`id_cliente`, `nome_cliente`, `endereco_cliente`, `telefone_cliente`, `tipo_cliente`, `cpf_cnpj_cliente`, `pass`) VALUES
(1, 'João da Silva', 'Rua A, 123', '11111111111', 'Pessoa Física', '12345678900', '123'),
(2, 'Empresa ABC', 'Av. B, 456', '22222222222', 'Pessoa Jurídica', '12345678000100', '123'),
(3, 'Ewerton', 'teste', '123123123', 'Pesso Fisica', '1', '1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_cliente_apolice`
--

CREATE TABLE `tb_hl_cliente_apolice` (
  `id_cliente` int(11) DEFAULT NULL,
  `id_apolice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_cliente_apolice`
--

INSERT INTO `tb_hl_cliente_apolice` (`id_cliente`, `id_apolice`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_empresa`
--

CREATE TABLE `tb_hl_empresa` (
  `id_empresa` int(11) NOT NULL,
  `nome_empresa` varchar(30) DEFAULT NULL,
  `telefone_empresa` decimal(11,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_empresa`
--

INSERT INTO `tb_hl_empresa` (`id_empresa`, `nome_empresa`, `telefone_empresa`) VALUES
(1, 'Transportadora XYZ', '33333333333'),
(2, 'Oficina ABC', '44444444444');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_empresa_funcionario`
--

CREATE TABLE `tb_hl_empresa_funcionario` (
  `id_empresa_funcionario` int(11) NOT NULL,
  `id_empresa` int(11) DEFAULT NULL,
  `id_funcionario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_empresa_funcionario`
--

INSERT INTO `tb_hl_empresa_funcionario` (`id_empresa_funcionario`, `id_empresa`, `id_funcionario`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_funcionario`
--

CREATE TABLE `tb_hl_funcionario` (
  `id_funcionario` int(11) NOT NULL,
  `nome_funcionario` varchar(30) DEFAULT NULL,
  `telefone_funcionario` decimal(11,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_funcionario`
--

INSERT INTO `tb_hl_funcionario` (`id_funcionario`, `nome_funcionario`, `telefone_funcionario`) VALUES
(1, 'Maria Souza', '55555555555'),
(2, 'José Santos', '66666666666');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_marca`
--

CREATE TABLE `tb_hl_marca` (
  `id_marca` int(11) NOT NULL,
  `marca_veiculo` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_marca`
--

INSERT INTO `tb_hl_marca` (`id_marca`, `marca_veiculo`) VALUES
(1, 'Ford'),
(2, 'Toyota'),
(3, 'Chevrolet');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_modal`
--

CREATE TABLE `tb_hl_modal` (
  `id_modal` int(11) NOT NULL,
  `categoria_modal` varchar(20) DEFAULT NULL,
  `tipo_modal` varchar(10) DEFAULT NULL,
  `limite_altura` decimal(3,2) DEFAULT NULL,
  `limite_comprimento` decimal(4,2) DEFAULT NULL,
  `limite_peso` decimal(5,0) DEFAULT NULL,
  `limite_largura` decimal(3,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_modal`
--

INSERT INTO `tb_hl_modal` (`id_modal`, `categoria_modal`, `tipo_modal`, `limite_altura`, `limite_comprimento`, `limite_peso`, `limite_largura`) VALUES
(1, 'Carga Seca', 'Rodoviário', '4.00', '10.00', '10000', '2.50'),
(2, 'Carga Refrigerada', 'Rodoviário', '4.50', '12.00', '12000', '2.70');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_modelo`
--

CREATE TABLE `tb_hl_modelo` (
  `id_modelo` int(11) NOT NULL,
  `modelo_veiculo` varchar(30) DEFAULT NULL,
  `comprimento_veiculo` decimal(4,2) DEFAULT NULL,
  `altura_veiculo` decimal(3,2) DEFAULT NULL,
  `eixo_veiculo` int(11) DEFAULT NULL,
  `peso_veiculo` decimal(5,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_modelo`
--

INSERT INTO `tb_hl_modelo` (`id_modelo`, `modelo_veiculo`, `comprimento_veiculo`, `altura_veiculo`, `eixo_veiculo`, `peso_veiculo`) VALUES
(1, 'Focus', '4.50', '1.60', 2, '1500'),
(2, 'Corolla', '4.60', '1.70', 2, '1550'),
(3, 'Silverado', '6.00', '1.90', 2, '2500');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_prestador`
--

CREATE TABLE `tb_hl_prestador` (
  `id_prestador` int(11) NOT NULL,
  `id_empresa_funcionario` int(11) DEFAULT NULL,
  `local_prestador` varchar(40) DEFAULT NULL,
  `placa_guincho` decimal(7,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_prestador`
--

INSERT INTO `tb_hl_prestador` (`id_prestador`, `id_empresa_funcionario`, `local_prestador`, `placa_guincho`) VALUES
(1, 1, 'Rua X, 789', '1111111'),
(2, 2, 'Av. Y, 987', '2222222');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_prestador_modal`
--

CREATE TABLE `tb_hl_prestador_modal` (
  `id_prestador` int(11) DEFAULT NULL,
  `id_modal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_prestador_modal`
--

INSERT INTO `tb_hl_prestador_modal` (`id_prestador`, `id_modal`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_servico`
--

CREATE TABLE `tb_hl_servico` (
  `id_servico` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_prestador` int(11) DEFAULT NULL,
  `hora_servico` datetime DEFAULT NULL,
  `local_usuario` varchar(50) DEFAULT NULL,
  `status_ordem` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_servico`
--

INSERT INTO `tb_hl_servico` (`id_servico`, `id_cliente`, `id_prestador`, `hora_servico`, `local_usuario`, `status_ordem`) VALUES
(1, 1, 1, '2023-09-05 10:00:00', 'Local A', 'A'),
(2, 2, 2, '2023-09-10 14:30:00', 'Local B', 'P');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_tipo_veiculo`
--

CREATE TABLE `tb_hl_tipo_veiculo` (
  `id_tipo_veiculo` int(11) NOT NULL,
  `tipo_veiculo` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_tipo_veiculo`
--

INSERT INTO `tb_hl_tipo_veiculo` (`id_tipo_veiculo`, `tipo_veiculo`) VALUES
(1, 'Sedan'),
(2, 'SUV'),
(3, 'Caminhão');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_hl_veiculo`
--

CREATE TABLE `tb_hl_veiculo` (
  `id_veiculo` int(11) NOT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `id_tipo_veiculo` int(11) DEFAULT NULL,
  `id_modelo` int(11) DEFAULT NULL,
  `chassi_alongado` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_hl_veiculo`
--

INSERT INTO `tb_hl_veiculo` (`id_veiculo`, `id_marca`, `id_tipo_veiculo`, `id_modelo`, `chassi_alongado`) VALUES
(1, 1, 1, 1, 'N'),
(2, 2, 1, 2, 'N'),
(3, 3, 3, 3, 'N');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_hl_apolice`
--
ALTER TABLE `tb_hl_apolice`
  ADD PRIMARY KEY (`id_apolice`),
  ADD KEY `tb_hl_apolice_id_veiculo_fk` (`id_veiculo`);

--
-- Índices para tabela `tb_hl_cliente`
--
ALTER TABLE `tb_hl_cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Índices para tabela `tb_hl_cliente_apolice`
--
ALTER TABLE `tb_hl_cliente_apolice`
  ADD KEY `tb_hl_cliente_apolice_id_cliente_fk` (`id_cliente`),
  ADD KEY `tb_hl_cliente_apolice_id_apolice_fk` (`id_apolice`);

--
-- Índices para tabela `tb_hl_empresa`
--
ALTER TABLE `tb_hl_empresa`
  ADD PRIMARY KEY (`id_empresa`);

--
-- Índices para tabela `tb_hl_empresa_funcionario`
--
ALTER TABLE `tb_hl_empresa_funcionario`
  ADD PRIMARY KEY (`id_empresa_funcionario`),
  ADD KEY `tb_hl_empresa_funcionario_id_empresa_fk` (`id_empresa`),
  ADD KEY `tb_hl_empresa_funcionario_id_funcionario_fk` (`id_funcionario`);

--
-- Índices para tabela `tb_hl_funcionario`
--
ALTER TABLE `tb_hl_funcionario`
  ADD PRIMARY KEY (`id_funcionario`);

--
-- Índices para tabela `tb_hl_marca`
--
ALTER TABLE `tb_hl_marca`
  ADD PRIMARY KEY (`id_marca`);

--
-- Índices para tabela `tb_hl_modal`
--
ALTER TABLE `tb_hl_modal`
  ADD PRIMARY KEY (`id_modal`);

--
-- Índices para tabela `tb_hl_modelo`
--
ALTER TABLE `tb_hl_modelo`
  ADD PRIMARY KEY (`id_modelo`);

--
-- Índices para tabela `tb_hl_prestador`
--
ALTER TABLE `tb_hl_prestador`
  ADD PRIMARY KEY (`id_prestador`),
  ADD KEY `tb_hl_prestador_id_empresa_funcionario_fk` (`id_empresa_funcionario`);

--
-- Índices para tabela `tb_hl_prestador_modal`
--
ALTER TABLE `tb_hl_prestador_modal`
  ADD KEY `tb_hl_prestador_modal_id_prestador_fk` (`id_prestador`),
  ADD KEY `tb_hl_prestador_modal_id_modal_fk` (`id_modal`);

--
-- Índices para tabela `tb_hl_servico`
--
ALTER TABLE `tb_hl_servico`
  ADD PRIMARY KEY (`id_servico`),
  ADD KEY `tb_hl_servico_id_cliente_fk` (`id_cliente`),
  ADD KEY `tb_hl_servico_id_prestador_fk` (`id_prestador`);

--
-- Índices para tabela `tb_hl_tipo_veiculo`
--
ALTER TABLE `tb_hl_tipo_veiculo`
  ADD PRIMARY KEY (`id_tipo_veiculo`);

--
-- Índices para tabela `tb_hl_veiculo`
--
ALTER TABLE `tb_hl_veiculo`
  ADD PRIMARY KEY (`id_veiculo`),
  ADD KEY `tb_hl_veiculo_id_marca_fk` (`id_marca`),
  ADD KEY `tb_hl_veiculo_id_modelo_fk` (`id_modelo`),
  ADD KEY `tb_hl_veiculo_id_tipo_veiculo_fk` (`id_tipo_veiculo`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_hl_apolice`
--
ALTER TABLE `tb_hl_apolice`
  ADD CONSTRAINT `tb_hl_apolice_id_veiculo_fk` FOREIGN KEY (`id_veiculo`) REFERENCES `tb_hl_veiculo` (`id_veiculo`);

--
-- Limitadores para a tabela `tb_hl_cliente_apolice`
--
ALTER TABLE `tb_hl_cliente_apolice`
  ADD CONSTRAINT `tb_hl_cliente_apolice_id_apolice_fk` FOREIGN KEY (`id_apolice`) REFERENCES `tb_hl_apolice` (`id_apolice`),
  ADD CONSTRAINT `tb_hl_cliente_apolice_id_cliente_fk` FOREIGN KEY (`id_cliente`) REFERENCES `tb_hl_cliente` (`id_cliente`);

--
-- Limitadores para a tabela `tb_hl_empresa_funcionario`
--
ALTER TABLE `tb_hl_empresa_funcionario`
  ADD CONSTRAINT `tb_hl_empresa_funcionario_id_empresa_fk` FOREIGN KEY (`id_empresa`) REFERENCES `tb_hl_empresa` (`id_empresa`),
  ADD CONSTRAINT `tb_hl_empresa_funcionario_id_funcionario_fk` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_hl_funcionario` (`id_funcionario`);

--
-- Limitadores para a tabela `tb_hl_prestador`
--
ALTER TABLE `tb_hl_prestador`
  ADD CONSTRAINT `tb_hl_prestador_id_empresa_funcionario_fk` FOREIGN KEY (`id_empresa_funcionario`) REFERENCES `tb_hl_empresa_funcionario` (`id_empresa_funcionario`);

--
-- Limitadores para a tabela `tb_hl_prestador_modal`
--
ALTER TABLE `tb_hl_prestador_modal`
  ADD CONSTRAINT `tb_hl_prestador_modal_id_modal_fk` FOREIGN KEY (`id_modal`) REFERENCES `tb_hl_modal` (`id_modal`),
  ADD CONSTRAINT `tb_hl_prestador_modal_id_prestador_fk` FOREIGN KEY (`id_prestador`) REFERENCES `tb_hl_prestador` (`id_prestador`);

--
-- Limitadores para a tabela `tb_hl_servico`
--
ALTER TABLE `tb_hl_servico`
  ADD CONSTRAINT `tb_hl_servico_id_cliente_fk` FOREIGN KEY (`id_cliente`) REFERENCES `tb_hl_cliente` (`id_cliente`),
  ADD CONSTRAINT `tb_hl_servico_id_prestador_fk` FOREIGN KEY (`id_prestador`) REFERENCES `tb_hl_prestador` (`id_prestador`);

--
-- Limitadores para a tabela `tb_hl_veiculo`
--
ALTER TABLE `tb_hl_veiculo`
  ADD CONSTRAINT `tb_hl_veiculo_id_marca_fk` FOREIGN KEY (`id_marca`) REFERENCES `tb_hl_marca` (`id_marca`),
  ADD CONSTRAINT `tb_hl_veiculo_id_modelo_fk` FOREIGN KEY (`id_modelo`) REFERENCES `tb_hl_modelo` (`id_modelo`),
  ADD CONSTRAINT `tb_hl_veiculo_id_tipo_veiculo_fk` FOREIGN KEY (`id_tipo_veiculo`) REFERENCES `tb_hl_tipo_veiculo` (`id_tipo_veiculo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

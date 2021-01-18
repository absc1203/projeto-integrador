CREATE TABLE `Produto` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255),
	`descricao` varchar(255),
	`preco` DECIMAL,
	`imagem` blob,
	`qtd_estoque` INT,
	`id_categoria` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Categoria` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255),
	PRIMARY KEY (`id`)
);

CREATE TABLE `Usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` varchar(255),
	`senha` varchar(255),
	`nome_completo` varchar(255),
	PRIMARY KEY (`id`)
);

ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fk0` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`id`);


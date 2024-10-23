create database anima_inos;

use anima_inos;

create table usuarios
(
	id_usuario int primary key auto_increment,
    email varchar(150) not null,
	nome varchar(150) not null,
    nascimento date not null,
    foto_de_perfil bit
);

create table comentarios
(
	id_comentario int primary key auto_increment,
	data_do_comentario datetime not null,
    curtidas int,
    id_usuario int,
    foreign key (id_usuario) references usuarios(id_usuario)
);
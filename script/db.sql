create database consultorio_medico_react_native;
use consultorio_medico_react_native;

create table admins(
id int not null auto_increment,
primary key (id),
nombre varchar (40) not null,
apellidos varchar (40) not null,
documento bigint (20) not null,
email varchar (30) not null,
telefono varchar (15) not null,
password varchar (40) not null
);

INSERT INTO admins (nombre, apellidos, documento, email, telefono, password) VALUES
    ('Daniela', 'Riascos', 633534353, 'daniela@gmail.com', '3145716188', '123456' ),
    ('Duberney', 'Obando Cano', 9958113, 'duberney@gmail.com', '3145716188', '123456' )
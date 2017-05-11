create database burgers_db;
use burgers_db;

create table burgers(
id int AUTO_INCREMENT not null,
burger_name varchar(75) not null,
devoured boolean DEFAULT false,
date TIMESTAMP,
primary key(id)
)
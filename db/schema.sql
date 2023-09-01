-- drop database 
DROP DATABASE IF EXISTS inventory_db;
-- create inventory_db;
CREATE DATABASE inventory_db;

-- use inventory db
USE inventory_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INT NOT NULL,
    foreign key(department_id) references department(id)
);

-- creates the tables 
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    foreign key(role_id) references role(id)
);


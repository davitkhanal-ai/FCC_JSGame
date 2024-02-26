-- first
CREATE DATABASE node_authentication;

USE node_authentication;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Fdv9GnxP5SejyQVL
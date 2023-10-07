CREATE DATABASE contacts;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE categories (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL
);

CREATE TABLE contacts (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(255),
    category_id UUID,
    FOREIGN KEY (category_id) REFERENCES categories (id)
);
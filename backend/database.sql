CREATE DATABASE foodee_admin;

--require to add extension in psql
--create extension if not exists "uuid-ossp";
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
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

CREATE TABLE rooms(
    room_id BIGSERIAL PRIMARY KEY,
    created_by uuid,
    created_by_username VARCHAR(255),
    created_at DATE
);

CREATE TABLE restaurants(
    restaurant_id BIGSERIAL PRIMARY KEY,
    alias VARCHAR(255),
    name VARCHAR(255),
    image_url VARCHAR(255),
    url VARCHAR(255),
    review_count INT,
    rating FLOAT(8),
    price VARCHAR(255),
    phone VARCHAR(255),
    display_phone VARCHAR(255),
    address1 VARCHAR(255),
    address2 VARCHAR(255),
    address3 VARCHAR(255),
    city VARCHAR(255),
    zip_code VARCHAR(255),
    country VARCHAR(255),
    state VARCHAR(255),
    room_id INT,
    FOREIGN KEY(room_id)
        REFERENCES rooms(room_id)
        ON DELETE CASCADE
);

CREATE TABLE user_room(
	user_id uuid,
	room_id BIGINT,
    FOREIGN KEY(user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,
    FOREIGN KEY(room_id)
        REFERENCES rooms(room_id)
        ON DELETE CASCADE
);

CREATE TABLE user_restaurant(
    user_id uuid,
    restaurant_id BIGINT,
    username VARCHAR(255),
    vote BOOLEAN,
    FOREIGN KEY(user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,
    FOREIGN KEY(restaurant_id)
        REFERENCES restaurants(restaurant_id)
        ON DELETE CASCADE
);
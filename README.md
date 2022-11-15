# WhatInTheWorld


To create database:  

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL UNIQUE,
password  VARCHAR(10) NOT NULL,
countries_visited VARCHAR,
highscore BIGINT
);
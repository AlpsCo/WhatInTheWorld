# WhatInTheWorld

An open source, free to use, geography edutainment game! Test your world knowledge using our trivia application.

To create database:  

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL UNIQUE,
password  VARCHAR(10) NOT NULL,
countries_visited VARCHAR,
highscore BIGINT
);

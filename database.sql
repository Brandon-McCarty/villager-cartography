--create database named "villager_cartography"


-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user_worlds" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE,
	"world_id" INT REFERENCES "worlds" ON DELETE CASCADE
	);

CREATE TABLE "worlds" (
	"id" SERIAL PRIMARY KEY,
	"world_name" VARCHAR(255),
	"user_id" INT REFERENCES "user" ON DELETE CASCADE
	);
	
CREATE TABLE "locations" (
	"id" SERIAL PRIMARY KEY,
	"location_name" VARCHAR(255),
	"x_coordinate" INT,
	"y_coordinate" INT,
	"z_coordinate" INT,
	"description" VARCHAR(500),
	"explored_status" BOOLEAN DEFAULT FALSE,
	"image" VARCHAR(2000),
	"world_id" INT REFERENCES "worlds" ON DELETE CASCADE
	);
	
	CREATE TABLE "message_board" (
		"id" SERIAL PRIMARY KEY,
		"date" DATE DEFAULT CURRENT_DATE,
		"time" TIME DEFAULT NOW(),
		"message" VARCHAR (500),
		"user_id" INT REFERENCES "user",
		"world_id" INT REFERENCES "worlds" ON DELETE CASCADE
		);
	
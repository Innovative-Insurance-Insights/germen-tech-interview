CREATE TABLE IF NOT EXISTS "pokemons" (
	"id" serial PRIMARY KEY NOT NULL,
	"generation" integer NOT NULL,
	"name" text NOT NULL,
	"types" json NOT NULL
);

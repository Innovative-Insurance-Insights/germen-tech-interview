import { integer, json, pgTable, serial, text } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const pokemons = pgTable("pokemons", {
  id: serial("id").primaryKey(),
  generation: integer("generation").notNull(),
  name: text("name").notNull(),
  types: json("types").$type<string[]>().notNull(),
});

const schemas = {
  types: z.string().array(),
};

export const selectPokemonSchema = createSelectSchema(pokemons, schemas);
export type Pokemon = z.infer<typeof selectPokemonSchema>;

import { loadEnvConfig } from "@next/env";
import { z } from "zod";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const envServerSchema = z.object({
  databaseUrl: z.string(),
  pokemonApiUrl: z.string(),
});

export const envServer = envServerSchema.parse({
  databaseUrl: process.env.DATABASE_URL,
  pokemonApiUrl: process.env.POKEMON_API_URL,
});

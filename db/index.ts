import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schemas";
import { envServer } from "@/env/server";

const getNeonDb = () => {
  const sql = neon(envServer.databaseUrl);
  return drizzle(sql, { schema });
};

export const db = getNeonDb();

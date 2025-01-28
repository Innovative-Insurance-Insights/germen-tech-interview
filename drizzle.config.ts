import type { Config } from "drizzle-kit";
import { envServer } from "@/env/server";

export default {
  schema: "./db/schemas/*",
  dialect: "postgresql",
  dbCredentials: {
    url: envServer.databaseUrl,
  },
} satisfies Config;

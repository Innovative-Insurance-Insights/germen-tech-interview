import { envServer } from "@/env/server";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const runMigrations = async () => {
  try {
    const migrationClient = postgres(envServer.databaseUrl, {
      max: 1,
      onnotice: () => {},
    });
    await migrate(drizzle(migrationClient), {
      migrationsFolder: "./drizzle",
    });
    console.log("migrations runned");
    process.exit(0);
  } catch (e) {
    console.log("error while running drizzle migrations");
    console.log(e);
    process.exit(1);
  }
};

runMigrations();

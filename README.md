# Germen Tech Interview

## Starter

Install postgresql and create a database with a `pokemons` table.

Create a `.env.local` file and set the the following environment variables:

```
DATABASE_URL="postgres://DATABASE_USER:DATABASE_PASSWORD@0.0.0.0:5432/pokemons"
POKEMON_API_URL="https://tyradex.vercel.app/api/v1/pokemon"
```

With your favorite package manager install dependencies and start the project.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/client.tsx`. The page auto-updates as you edit the file.

## Exercice

You should:

1. Make a server action which will consume the pokemon api with `envServer.pokemonApiUrl` and feed the database (drizzle-orm is available in the project if needed
   )
2. Enhance the server action to return pokemons from database if availables

3. Make a button that will consume this server action to retrieve pokemons

4. Display pokemons in the `DataTable` component

5. Make filters on pokemon's name, generation and type with `Input` and `Select` components

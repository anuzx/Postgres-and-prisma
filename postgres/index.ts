import { Client } from "pg"

const pgClient = new Client(
  "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
);

async function main() {
    
    await pgClient.connect()
    const response = await pgClient.query("SELECT * FROM users")
    console.log(response.rows)
}

main()
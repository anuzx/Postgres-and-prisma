import express from "express";

import { Client } from "pg";

const pgClient = new Client(
  "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
);

const app = express();
pgClient.connect();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    //  const insertQuery = `INSERT INTO users (username,email,password) VALUES('${username}','${email}','${password}')`;

    // const response = await pgClient.query(insertQuery);

    //better way to write query
      const insertQuery = `INSERT INTO users (email,username,password) VALUES($1,$2,$3)`;
      const values = [email, username, password];

    const response = await pgClient.query(insertQuery ,values );

    res.json({
      message: "signup done",
    });
  } catch (error) {
    console.log("ERROR: ", error);
    res.json({
      message: "backend crash",
    });
  }
});

app.listen(3000, () => console.log("server started at 3000"));

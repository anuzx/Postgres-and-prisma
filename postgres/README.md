# postgres url

postgresql://username:password@host/database

# commands
<br>
<p>we can run these commands in either our terminal after running postgres locally via docker or use pg library(Non-blocking PostgreSQL client for Node.js.) to run the same via Node.js</p>

```
bun i pg @types/pg
```

<br>

# TO CREATE TABLE

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

1. CREATE TABLE users() : this command creates a new table in the db named users <br>

2. Id SERIAL PRIMARY KEY,
   <br>
   Id: the name of the first column in the users table ,used as a unique identifier for each row (user) ,similar to \_id in mongodb
   <br>
   SERIAL: a postgresql-specific datatype for creating an auto increment integer
   <br>
   PRIMARY KEY: This constraint specifies that the id column is the primary key for the table, meaning it uniquely identifies each row. Values in this column must be unique and not null.
   <br>

3. email VARCHAR(255) UNIQUE NOT NULL,
   <br>
   email: The name of the second column, intended to store the user's username.
   <br>
   VARCHAR(50): A variable character string data type that can store up to 50 characters. It's used here to limit the length of the username.
   <br>
   UNIQUE: This constraint ensures that all values in the username column are unique across the table. No two users can have the same username
   br>
   <br>
   NOT NULL: This constraint prevents null values from being inserted into the username column. Every row must have a username value.
   <br>

4. password VARCHAR(255) NOT NUL
   Same as above, can be non unique
   <br>

5. created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   <br>
   created_at: The name of the fifth column, intended to store the timestamp when the user was created.
   <br>
   TIMESTAMP WITH TIME ZONE: This data type stores both a timestamp and a time zone, allowing for the precise tracking of when an event occurred, regardless of the user's or server's time zone.
   <br>
   DEFAULT CURRENT_TIMESTAMP: This default value automatically sets the created_at column to the date and time at which the row is inserted into the table, using the current timestamp of the database server.

# TO INSERT DATA (create)

```
INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');
```

# TO UPDATE DATA (update)

```
UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';
```

# TO DELETE DATA (delete)

```
DELETE FROM users
WHERE id = 1;
```

# TO SELECT DATA (read)

```
SELECT * FROM users
WHERE id = 1;
```

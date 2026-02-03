# sqlinjection

```
 const insertQuery = `INSERT INTO users (username,email,password) Values('${username}','${email}','${password}')`;
```

<br>
sending the query like this can have sql injection vuln as attacker can pass malicious sql query in password field and can even delete our database 
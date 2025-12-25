# data_modelling

```
bun init
```
<br>

```
bunx prisma init
```

<br>

```
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```
<br>

DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

<br>

```
bunx prisma migrate dev
bunx prisma generate
```


To check the tabels:

```
docker ps 

docker exec -it Container_ID /bin/bash
```

```
psql -h localhost -U postgres
```

```
\dt;
```

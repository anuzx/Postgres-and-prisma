# How to use Prisma 

```
bun init -y
```
<br>

```
bun add -d prisma @types/pg
bun add @prisma/client @prisma/adapter-pg pg
```
<br>

```
bunx --bun prisma init
```

<br>

```
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```
<br>

DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

<br>

```
bunx --bun prisma migrate dev --name init
bunx --bun prisma generate
```
<br>

# To check the tabels

```
docker ps 

docker exec -it [Container_ID] /bin/bash
```

```
psql -h localhost -U postgres
```

```
\dt;
```
<br>
TO come back 
```
exit 
```

<br>

# To stop the container 

```
docker kill [container_id]
```

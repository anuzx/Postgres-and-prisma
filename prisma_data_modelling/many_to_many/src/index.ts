import { prisma } from "../client"

//query for implicit many to many

prisma.post.findMany({
    include: {
        tags: true
    }
})

//query for explicit many to many

prisma.post.findMany({
    include: {
        tags: true
    }
})
import { prisma } from "../client"

async function getTodos(userId: number) {
    const response = await prisma.todo.findMany({
        where: {
            userId:userId
        }
    })
    console.log(response)
}

getTodos(1)
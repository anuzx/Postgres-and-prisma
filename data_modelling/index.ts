import { PrismaClient } from "./generated/prisma/client";

const prisma = new PrismaClient()

//write a function that gives the todo details of a user along with the user details
//using joins

async function getTodoAndUserDetails(userId: number) {
    const response = await prisma.todo.findMany({
        where: {
            userId:userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
            
        }
    })
    console.log(response)
}

getTodoAndUserDetails(1)

//we know that todos is related to users a
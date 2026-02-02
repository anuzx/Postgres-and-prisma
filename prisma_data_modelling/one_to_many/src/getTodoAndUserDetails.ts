import { prisma } from "../client"

//we will use joins logic 
async function getTodoAndUserDetails(userId:number) {
    const response = await prisma.todo.findMany({
        where: {
        userId:userId
        }, select: {
            id: true,
            title: true,
            description: true,
            user:true
    }

    })
    console.log(response)
}

getTodoAndUserDetails(1) //this will return all the task and user details of userId === 1
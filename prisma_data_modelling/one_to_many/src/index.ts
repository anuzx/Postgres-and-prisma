import { prisma } from "../client";


type Userpayload = {
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  todos: { title: string }[];
};

async function InsertUser(user: Userpayload) {
  const response = await prisma.user.create({
    data: {
      username: user.username,
      password: user.password,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      todos: {
        create: user.todos.map((todo) => ({
          title: todo.title,
        })),
      },
    },
  });
    console.log(response)
}

InsertUser({
  username: "qwerty",
  password: "qwerty",
  email: "abcd@example.com",
  firstname: "devil",
  lastname: "pico",
  todos: [
    { title: "Learn postgres" },
    { title: "Build website" },
    { title: "Ship" },
  ],
});

import { prisma } from "./lib/prisma.js";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "alice@example.com",
      name: "Alice",
      articles: {
        create: {
          title: "Hello Prisma",
          body: "This is my first article",
        },
      },
    },
    include: { articles: true },
  });

  console.log("Created user:", JSON.stringify(user, null, 2));

  const users = await prisma.user.findMany({
    include: { articles: true },
  });

  console.log("All users:", JSON.stringify(users, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

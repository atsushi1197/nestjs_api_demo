import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

export const usersSeeder = () => {
  const insertData: User[] = [
    {
      id: 1,
      name: 'test1',
      email: 'test1@example.com',
      password: 'password',
    },
    {
      id: 2,
      name: 'test2',
      email: 'test2@example.com',
      password: 'password',
    },
    {
      id: 3,
      name: 'test3',
      email: 'test3@example.com',
      password: 'password',
    },
  ];

  const execSeeding = async () => {
    const users = insertData.map((c) => {
      return prisma.user.create({ data: c });
    });
    return await prisma.$transaction(users);
  };

  const main = async () => {
    await execSeeding();
  };

  main()
    .then(() => {
      console.log('seed finished.');
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

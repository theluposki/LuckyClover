import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UserRepository = {
  async getAll() {
    const users = await prisma.user.findMany();

    return users;
  },
  async getOneByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  },
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserInterface {
  id?: string;
  name: string;
  fullName: string;
  nickName: string;
  email?: string;
  password?: string;
  imgProfile: string;
  rules?: string;
}

export const UserRepository = {
  async getAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        fullName: true,
        nickName: true,
        email: true,
        imgProfile: true,
        createAt: true,
        updateAt: true,
      },
    });

    return users;
  },
  async getOneById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  },
  async getOneByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  },
  async update(id: string, User: UserInterface) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: User.name,
        fullName: User.fullName,
        nickName: User.nickName,
        imgProfile: User.imgProfile,
      },
    });
    return user;
  },
  async delete(id: string) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  },
};

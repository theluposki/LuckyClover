import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface NumberInterface {
  id?: string;
  number: number;
}

export const NumberRepository = {
  async getOneById(id: string) {
    const number = await prisma.numbers.findUnique({
      where: {
        id,
      },
    });
    return number;
  },
  async getAll() {
    const number = await prisma.numbers.findMany({});

    return number;
  },
  async create(Number: NumberInterface) {
    const number = await prisma.numbers.create({
      data: {
        number: Number.number,
      },
    });
    return number;
  },
  async createMany(Numbers: NumberInterface) {
    const number = await prisma.numbers.createMany({
      data: Numbers,
      skipDuplicates: true,
    });
    return number;
  },
  async update(id: string, Number: NumberInterface) {
    const number = await prisma.numbers.update({
      where: {
        id,
      },
      data: {
        number: Number.number,
      },
    });
    return number;
  },
  async delete(id: string) {
    const number = await prisma.numbers.delete({
      where: {
        id,
      },
    });
    return number;
  },
};

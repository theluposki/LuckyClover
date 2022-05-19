import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface RaffleInterface {
  id?: string;
  raffleName: string;
  award: string;
  price: number;
  imgAward: string;
  createAt?: string;
  updateAt?: string;
  numbers?: [];
}

export const RafflesRepository = {
  async getOneById(id: string) {
    const raffle = await prisma.raffles.findUnique({
      where: {
        id,
      },
    });
    return raffle;
  },
  async getAll() {
    const raffle = await prisma.raffles.findMany({});

    return raffle;
  },
  async create(raffles: RaffleInterface) {
    const raffle = await prisma.raffles.create({
      data: {
        raffleName: raffles.raffleName,
        award: raffles.award,
        price: raffles.price,
        imgAward: raffles.imgAward,
      },
    });
    return raffle;
  },
  async update(id: string, raffles: RaffleInterface) {
    const raffle = await prisma.raffles.update({
      where: {
        id,
      },
      data: {
        raffleName: raffles.raffleName,
        award: raffles.award,
        price: raffles.price,
        imgAward: raffles.imgAward,
      },
    });
    return raffle;
  },
  async delete(id: string) {
    const raffle = await prisma.raffles.delete({
      where: {
        id,
      },
    });
    return raffle;
  },
};

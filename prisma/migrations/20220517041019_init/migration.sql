/*
  Warnings:

  - You are about to drop the column `raffleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_NumbersToRaffles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_raffleId_fkey";

-- DropForeignKey
ALTER TABLE "_NumbersToRaffles" DROP CONSTRAINT "_NumbersToRaffles_A_fkey";

-- DropForeignKey
ALTER TABLE "_NumbersToRaffles" DROP CONSTRAINT "_NumbersToRaffles_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "raffleId",
ALTER COLUMN "rules" SET DEFAULT E'user';

-- DropTable
DROP TABLE "_NumbersToRaffles";

-- CreateTable
CREATE TABLE "UserOnRaffles" (
    "userId" TEXT NOT NULL,
    "rafflesId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserOnRaffles_pkey" PRIMARY KEY ("userId","rafflesId")
);

-- AddForeignKey
ALTER TABLE "UserOnRaffles" ADD CONSTRAINT "UserOnRaffles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnRaffles" ADD CONSTRAINT "UserOnRaffles_rafflesId_fkey" FOREIGN KEY ("rafflesId") REFERENCES "Raffles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

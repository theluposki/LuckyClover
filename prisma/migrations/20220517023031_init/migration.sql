/*
  Warnings:

  - You are about to drop the column `idRaffle` on the `Numbers` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Raffles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Numbers" DROP CONSTRAINT "Numbers_idRaffle_fkey";

-- DropForeignKey
ALTER TABLE "Raffles" DROP CONSTRAINT "Raffles_userId_fkey";

-- AlterTable
ALTER TABLE "Numbers" DROP COLUMN "idRaffle";

-- AlterTable
ALTER TABLE "Raffles" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "raffleId" TEXT;

-- CreateTable
CREATE TABLE "RafflesOnNumbers" (
    "raffleId" TEXT NOT NULL,
    "numberId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RafflesOnNumbers_pkey" PRIMARY KEY ("numberId","raffleId")
);

-- CreateTable
CREATE TABLE "_NumbersToRaffles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_NumbersToRaffles_AB_unique" ON "_NumbersToRaffles"("A", "B");

-- CreateIndex
CREATE INDEX "_NumbersToRaffles_B_index" ON "_NumbersToRaffles"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_raffleId_fkey" FOREIGN KEY ("raffleId") REFERENCES "Raffles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RafflesOnNumbers" ADD CONSTRAINT "RafflesOnNumbers_raffleId_fkey" FOREIGN KEY ("raffleId") REFERENCES "Raffles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RafflesOnNumbers" ADD CONSTRAINT "RafflesOnNumbers_numberId_fkey" FOREIGN KEY ("numberId") REFERENCES "Numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NumbersToRaffles" ADD CONSTRAINT "_NumbersToRaffles_A_fkey" FOREIGN KEY ("A") REFERENCES "Numbers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NumbersToRaffles" ADD CONSTRAINT "_NumbersToRaffles_B_fkey" FOREIGN KEY ("B") REFERENCES "Raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `idUser` on the `Numbers` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Numbers` table. All the data in the column will be lost.
  - You are about to drop the column `numbers` on the `Raffles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Numbers" DROP CONSTRAINT "Numbers_idUser_fkey";

-- AlterTable
ALTER TABLE "Numbers" DROP COLUMN "idUser",
DROP COLUMN "number";

-- AlterTable
ALTER TABLE "Raffles" DROP COLUMN "numbers";

-- AddForeignKey
ALTER TABLE "Numbers" ADD CONSTRAINT "Numbers_idRaffle_fkey" FOREIGN KEY ("idRaffle") REFERENCES "Raffles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

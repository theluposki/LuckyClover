/*
  Warnings:

  - Added the required column `number` to the `Numbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Numbers" ADD COLUMN     "number" INTEGER NOT NULL;

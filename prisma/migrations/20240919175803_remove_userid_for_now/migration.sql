/*
  Warnings:

  - You are about to drop the column `userId` on the `List` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_userId_fkey";

-- AlterTable
ALTER TABLE "List" DROP COLUMN "userId";

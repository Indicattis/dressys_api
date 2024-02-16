/*
  Warnings:

  - You are about to alter the column `serv_duration` on the `Service` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Service` MODIFY `serv_duration` INTEGER NOT NULL;

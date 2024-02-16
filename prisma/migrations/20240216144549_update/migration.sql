/*
  Warnings:

  - You are about to alter the column `req_duration` on the `DRESSING_REQS` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `req_date` to the `DRESSING_REQS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DRESSING_REQS` ADD COLUMN `req_date` DATETIME(3) NOT NULL,
    MODIFY `req_duration` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Service`;

-- CreateTable
CREATE TABLE `DRESSING_SERVICES` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serv_description` VARCHAR(191) NOT NULL,
    `serv_price` DECIMAL(10, 2) NOT NULL,
    `serv_duration` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

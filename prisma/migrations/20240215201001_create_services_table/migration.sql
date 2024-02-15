/*
  Warnings:

  - You are about to alter the column `req_duration` on the `DRESSING_REQS` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - Added the required column `colab_level` to the `DRESSING_COLABORADORES` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DRESSING_COLABORADORES` ADD COLUMN `colab_level` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `DRESSING_REQS` MODIFY `req_duration` BIGINT NOT NULL;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serv_description` VARCHAR(191) NOT NULL,
    `serv_price` DECIMAL(10, 2) NOT NULL,
    `serv_duration` BIGINT NOT NULL,

    UNIQUE INDEX `Service_serv_description_key`(`serv_description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

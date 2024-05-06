/*
  Warnings:

  - You are about to drop the column `client_age` on the `dressing_clientes` table. All the data in the column will be lost.
  - You are about to drop the column `client_number` on the `dressing_clientes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[client_phone]` on the table `DRESSING_CLIENTES` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `client_birthday` to the `DRESSING_CLIENTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_genre` to the `DRESSING_CLIENTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_phone` to the `DRESSING_CLIENTES` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `DRESSING_CLIENTES_client_number_key` ON `dressing_clientes`;

-- AlterTable
ALTER TABLE `dressing_clientes` DROP COLUMN `client_age`,
    DROP COLUMN `client_number`,
    ADD COLUMN `client_birthday` DATETIME(3) NOT NULL,
    ADD COLUMN `client_genre` VARCHAR(191) NOT NULL,
    ADD COLUMN `client_location` VARCHAR(191) NULL,
    ADD COLUMN `client_phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `client_status` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `DRESSING_CLIENTES_client_phone_key` ON `DRESSING_CLIENTES`(`client_phone`);

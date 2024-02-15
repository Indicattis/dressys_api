/*
  Warnings:

  - A unique constraint covering the columns `[client_number]` on the table `DRESSING_CLIENTES` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[client_mail]` on the table `DRESSING_CLIENTES` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `client_age` to the `DRESSING_CLIENTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_mail` to the `DRESSING_CLIENTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_number` to the `DRESSING_CLIENTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_password` to the `DRESSING_CLIENTES` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DRESSING_CLIENTES` ADD COLUMN `client_age` INTEGER NOT NULL,
    ADD COLUMN `client_mail` VARCHAR(191) NOT NULL,
    ADD COLUMN `client_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `client_password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `DRESSING_COLABORADORES` (
    `id` VARCHAR(191) NOT NULL,
    `colab_name` VARCHAR(191) NOT NULL,
    `colab_number` VARCHAR(191) NOT NULL,
    `colab_password` VARCHAR(191) NOT NULL,
    `colab_mail` VARCHAR(191) NOT NULL,
    `colab_age` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DRESSING_COLABORADORES_colab_number_key`(`colab_number`),
    UNIQUE INDEX `DRESSING_COLABORADORES_colab_mail_key`(`colab_mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `DRESSING_CLIENTES_client_number_key` ON `DRESSING_CLIENTES`(`client_number`);

-- CreateIndex
CREATE UNIQUE INDEX `DRESSING_CLIENTES_client_mail_key` ON `DRESSING_CLIENTES`(`client_mail`);

-- CreateTable
CREATE TABLE `DRESSING_CLIENTES` (
    `id` VARCHAR(191) NOT NULL,
    `client_name` VARCHAR(191) NOT NULL,
    `client_phone` VARCHAR(191) NOT NULL,
    `client_genre` VARCHAR(191) NULL,
    `client_password` VARCHAR(191) NOT NULL,
    `client_mail` VARCHAR(191) NOT NULL,
    `client_birthday` DATETIME(3) NOT NULL,
    `client_status` INTEGER NOT NULL DEFAULT 1,
    `client_location` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `DRESSING_CLIENTES_client_phone_key`(`client_phone`),
    UNIQUE INDEX `DRESSING_CLIENTES_client_mail_key`(`client_mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DRESSING_COLABORADORES` (
    `id` VARCHAR(191) NOT NULL,
    `colab_name` VARCHAR(191) NOT NULL,
    `colab_number` VARCHAR(191) NOT NULL,
    `colab_password` VARCHAR(191) NOT NULL,
    `colab_mail` VARCHAR(191) NOT NULL,
    `colab_age` INTEGER NOT NULL,
    `colab_level` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `DRESSING_COLABORADORES_colab_number_key`(`colab_number`),
    UNIQUE INDEX `DRESSING_COLABORADORES_colab_mail_key`(`colab_mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DRESSING_REQS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `req_date` DATETIME(3) NOT NULL,
    `req_services` VARCHAR(191) NOT NULL,
    `req_duration` INTEGER NOT NULL,
    `req_price` DECIMAL(10, 2) NOT NULL,
    `req_status` BOOLEAN NOT NULL DEFAULT false,
    `req_client` VARCHAR(191) NOT NULL,
    `req_colab` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DRESSING_SERVICES` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serv_description` VARCHAR(191) NOT NULL,
    `serv_price` DECIMAL(10, 2) NOT NULL,
    `serv_duration` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DRESSING_REQS` ADD CONSTRAINT `DRESSING_REQS_req_client_fkey` FOREIGN KEY (`req_client`) REFERENCES `DRESSING_CLIENTES`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DRESSING_REQS` ADD CONSTRAINT `DRESSING_REQS_req_colab_fkey` FOREIGN KEY (`req_colab`) REFERENCES `DRESSING_COLABORADORES`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

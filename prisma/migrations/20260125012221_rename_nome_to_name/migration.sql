-- CreateTable
CREATE TABLE `authorprofile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `biography` TEXT NULL,
    `userId` INTEGER NOT NULL,
    `socialProfile` VARCHAR(500) NULL,

    UNIQUE INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` TEXT NOT NULL,
    `commentDate` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `postId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `postId`(`postId`),
    INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(755) NOT NULL,
    `content` TEXT NOT NULL,
    `publication_date` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `authorId` INTEGER NOT NULL,
    `categorieId` INTEGER NOT NULL,

    INDEX `authorId`(`authorId`),
    INDEX `categorieId`(`categorieId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `type` ENUM('leitor', 'autor', 'admin') NULL DEFAULT 'leitor',
    `data_criacao` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `authorprofile` ADD CONSTRAINT `authorprofile_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`categorieId`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

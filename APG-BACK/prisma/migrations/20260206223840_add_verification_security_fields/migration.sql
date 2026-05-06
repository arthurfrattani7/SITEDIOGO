/*
  Warnings:

  - You are about to drop the column `verificationCode` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `verificationCode`,
    ADD COLUMN `verificationCodeHash` VARCHAR(255) NULL,
    ADD COLUMN `verificationExpiredAt` DATETIME(0) NULL;

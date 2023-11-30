/*
  Warnings:

  - The primary key for the `Partida` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `data` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `donoId` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `esporte` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `horario` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `periodo` on the `Partida` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idPartida]` on the table `Partida` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dataPartida` to the `Partida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `donoIdPartida` to the `Partida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `esportePartida` to the `Partida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horarioPartida` to the `Partida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodoPartida` to the `Partida` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_donoId_fkey";

-- AlterTable
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_pkey",
DROP COLUMN "data",
DROP COLUMN "donoId",
DROP COLUMN "esporte",
DROP COLUMN "horario",
DROP COLUMN "id",
DROP COLUMN "periodo",
ADD COLUMN     "dataPartida" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "donoIdPartida" INTEGER NOT NULL,
ADD COLUMN     "esportePartida" TEXT NOT NULL,
ADD COLUMN     "horarioPartida" TEXT NOT NULL,
ADD COLUMN     "idPartida" SERIAL NOT NULL,
ADD COLUMN     "periodoPartida" INTEGER NOT NULL,
ADD CONSTRAINT "Partida_pkey" PRIMARY KEY ("idPartida");

-- CreateIndex
CREATE UNIQUE INDEX "Partida_idPartida_key" ON "Partida"("idPartida");

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_donoIdPartida_fkey" FOREIGN KEY ("donoIdPartida") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

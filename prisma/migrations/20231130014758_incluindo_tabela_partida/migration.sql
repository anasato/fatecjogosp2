/*
  Warnings:

  - A unique constraint covering the columns `[emailUsuario]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Partida" (
    "id" SERIAL NOT NULL,
    "esporte" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horario" TEXT NOT NULL,
    "periodo" INTEGER NOT NULL,
    "donoId" INTEGER NOT NULL,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_emailUsuario_key" ON "Usuario"("emailUsuario");

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

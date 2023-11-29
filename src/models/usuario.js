import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Fazendo CREATE
export async function createUsuario(dados) {
  return prisma.usuario.create({ data: dados });
}

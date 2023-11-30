import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//criando a partida

export async function createPartida(
  esportePartida,
  dataPartida,
  horarioPartida,
  periodoPartida,
  donoIdPartida
) {
  return prisma.Partida.create({
    data: {
      esportePartida: esportePartida,
      dataPartida: new Date(dataPartida),
      horarioPartida: horarioPartida,
      periodoPartida: periodoPartida,
      donoIdPartida: donoIdPartida,
    },
  });
}

//ler partida
export async function listarPartidas() {
  return prisma.Partida.findMany();
}

export async function buscarPartidaPorId(donoIdPartida) {
  return prisma.Partida.findFirst({
    where: {
      donoIdPartida: donoIdPartida,
    },
  });
}

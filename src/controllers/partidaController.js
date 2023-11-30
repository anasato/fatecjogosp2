import {
  createPartida,
  listarPartidas,
  buscarPartidaPorId,
} from "../models/partida.js";

export async function createPartidaC(req, res) {
  const {
    esportePartida,
    dataPartida,
    horarioPartida,
    periodoPartida,
    donoIdPartida,
  } = req.body;

  console.log("aqui!!");

  try {
    const partida = await createPartida(
      esportePartida,
      dataPartida,
      horarioPartida,
      periodoPartida,
      donoIdPartida
    );
    res.json(partida);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar partida" });
  }
}

export async function listarPartidaC(req, res) {
  try {
    const partida = await listarPartidas();
    res.json(partida);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao listar partidas" });
  }
}

import { createUsuario } from "../models/usuario.js";

export async function createUsuarioC(req, res) {
  const dados = req.body;

  console.log("aqui!!");

  // Verifica se os campos necessários estão presentes
  console.log(dados);

  try {
    const usuario = await createUsuario(dados);
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
}
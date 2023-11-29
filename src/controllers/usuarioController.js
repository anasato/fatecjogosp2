import { createUsuario, listarUsuarios, loginUser } from "../models/usuario.js";

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

export async function listarUsuariosC(req, res) {
  try {
    const usuario = await listarUsuarios();
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao listar usuarios" });
  }
}

export async function autenticarUsuarioC(req, res) {
  const { emailUsuario, senhaUsuario } = req.body;

  try {
    const user = await loginUser(emailUsuario, senhaUsuario);

    if (user) {
      // Autenticação bem-sucedida
      res.json({
        success: true,
        message: "Login realizado com sucesso!",
        user,
      });
    } else {
      // Credenciais inválidas
      res.json({
        success: false,
        message: "Credenciais inválidas. Tente novamente.",
      });
    }
  } catch (error) {
    console.error("Erro ao realizar o login", error);
    res
      .status(500)
      .json({ error: "Erro ao realizar o login. Verifique o console." });
  }
}

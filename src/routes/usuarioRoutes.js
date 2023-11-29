import { Router } from "express";
const router = Router();
import {
  createUsuarioC,
  listarUsuariosC,
  autenticarUsuarioC,
} from "../controllers/usuarioController.js";

router.post("/usuario", createUsuarioC);
router.get("/listarUsuarios", listarUsuariosC);
router.post("/login", autenticarUsuarioC);
// router.post("/login", async (req, res) => {
//   const { emailUsuario, senhaUsuario } = req.body;

//   try {
//     const usuarioAutenticado = await autenticarUsuarioC(
//       emailUsuario,
//       senhaUsuario
//     );

//     if (usuarioAutenticado) {
//       res.json({
//         success: true,
//         message: "Login realizado com sucesso!",
//         usuario: usuarioAutenticado,
//       });
//     } else {
//       res.json({
//         success: false,
//         message: "Credenciais inválidas. Tente novamente.",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Erro ao realizar o login" });
//   }
// });

export default router;

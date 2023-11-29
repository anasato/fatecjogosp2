import { Router } from "express";
const router = Router();
import {
  createUsuarioC,
  listarUsuariosC,
} from "../controllers/usuarioController.js";

router.post("/usuario", createUsuarioC);
router.get("/listarUsuarios", listarUsuariosC);

export default router;

import { Router } from "express";
const router = Router();
import { createUsuarioC } from "../controllers/usuarioController.js";

router.post("/usuario", createUsuarioC);

export default router;

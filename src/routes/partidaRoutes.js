import { Router } from "express";
const router = Router();

import {
  createPartidaC,
  listarPartidaC,
} from "../controllers/partidaController.js";

router.post("/partida", createPartidaC);
router.get("/listarPartidas", listarPartidaC);

export default router;

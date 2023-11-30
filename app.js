import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import usuarioRota from "./src/routes/usuarioRoutes.js";
import partidaRota from "./src/routes/partidaRoutes.js";

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", usuarioRota);
app.use("/", partidaRota);

app.listen(port, () => console.log("Servidor ligado!!"));

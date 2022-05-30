import 'dotenv/config'
import { con } from './Repository/conection.js';
import usuarioController from './Controller/usuarioController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors());
server.use(usuarioController);



server.listen(process.env.PORT,() => console.log(`API conectada na porta ${process.env.PORT} `))
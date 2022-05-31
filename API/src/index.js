import 'dotenv/config'
import { con } from './Repository/conection.js';


import usuarioController from './Controller/usuarioController.js'
import  filmeController  from "./Controller/filmeController.js";
import express from 'express'
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors());

//endpoints
server.use(usuarioController);
server.use(filmeController);


//liberar arquivos do storage
server.use('/storage/capasFilme', express.static('storage/capasFilme'));


server.listen(process.env.PORT,() => console.log(`API conectada na porta ${process.env.PORT} `))
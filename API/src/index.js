import 'dotenv/config'

import animeController from './Controller/animeController.js';
    
import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.use(animeController);




server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));
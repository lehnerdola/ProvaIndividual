import { CadastreAnime } from '../Repository/animeRepository.js'

import { Router } from "express";

const server = Router();

server.post('/anime', async (req, resp) => {
    try {
        const anime = req.body;

        const InserirAnime = await CadastreAnime(anime);

        resp.send(InserirAnime);
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

export default server

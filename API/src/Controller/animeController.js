import { CadastreAnime, ConsultarAnimes } from '../Repository/animeRepository.js'

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

server.get('/anime', async (req, resp) => {
    try {
        const resposta = await ConsultarAnimes();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})
export default server


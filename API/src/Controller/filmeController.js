import { AlterarImagem, CadastreFilme } from '../Repository/filmeRepository.js'
import multer from 'multer';

import { Router } from "express";

const upload = multer({ dest: 'storage/capasFilme'})
const server = Router();

server.post('/filme', async (req, resp) => {
    try {
        const filme = req.body;

        const InserirFilme = await CadastreFilme(filme);

        resp.send(InserirFilme);
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

server.put('/filme/capa ',upload.single('capa'), async (req,resp) => {
    try {
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await AlterarImagem(imagem, id)
        if(resposta != 1){
            throw new Error('Ops, deu erro!');
        }

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;
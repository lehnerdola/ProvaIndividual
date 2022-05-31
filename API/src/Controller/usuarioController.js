import { login } from '../Repository/usuario.js'

import { Router } from 'express';
const server = Router();


server.post('/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await login(email, senha);
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })

    }
})

export default server
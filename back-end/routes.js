import { Router } from "express"

import { clienteIndex, clienteCreate, trocarSenha } from "./Controller/clienteController.js"

const router = Router()

router
    .get('/cliente', clienteIndex)
    .post('/cliente', clienteCreate)
    .post('/cliente', trocarSenha)


export default router
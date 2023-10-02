import { Router } from "express"

import { clienteIndex, clienteCreate, usuarioSenha } from "./Controller/clienteController.js"

const router = Router()

router
    .get('/cliente', clienteIndex)
    .post('/cliente', clienteCreate)
    .post('/cliente', usuarioSenha)


export default router
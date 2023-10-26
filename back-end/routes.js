import { Router } from "express"

import { clienteIndex, clienteCreate, usuarioSenha } from "./Controller/clienteController.js"
import { AdmIndex, createAdm, loginAdm } from "./Controller/AdminController.js"
import { agendaindex, agendamentoMark } from "./Controller/agendamentoController.js"
// import { } from "./Controller/anamneseController.js"

const router = Router()

router
    .get('/cliente', clienteIndex)
    .post('/cliente', clienteCreate)
    .post('/cliente', usuarioSenha)

    .get('/adm', AdmIndex)
    .post('/admin', createAdm)
    .post('/adm', loginAdm)

    .get('/agendamento', agendaindex)
    .post('/agendamento', agendamentoMark)



export default router
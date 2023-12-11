import { Router } from "express"

import { clienteIndex, clienteCreate, usuarioSenha } from "./Controller/clienteController.js"
import { AdmIndex, createAdm, loginAdm } from "./Controller/admController.js"
import { agendaindex, agendamentoMark } from "./Controller/agendamentoController.js"
// import { } from "./Controller/anamneseController.js"
import { isAdmin } from "./middlewares/admPermission.js"

const router = Router()

router
    .get('/cliente', isAdmin(2), clienteIndex)
    .post('/cliente', clienteCreate)
    .post('/cliente/new', usuarioSenha)

    .get('/adm', isAdmin(3), AdmIndex)
    .post('/adm', createAdm)
    .post('/adm/login', loginAdm)

    .get('/agendamento', agendaindex)
    .post('/agendamento', agendamentoMark)



export default router
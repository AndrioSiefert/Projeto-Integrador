import { Router } from "express"

import { clienteIndex, clienteCreate, usuarioSenha } from "./Controller/clienteController.js"
import { AdmIndex, createAdm, loginAdm } from "./Controller/admController.js"
import { agendaindex, agendamentoMark } from "./Controller/agendamentoController.js"
import { anamneseCreate, anamneseIndex } from "./Controller/anamneseControlelr.js"
import { servicoCreate, servicoDelete, servicoIndex, servicoUpdate } from "./Controller/servicoController.js"

import { isAdmin } from "./middlewares/admPermission.js"

const router = Router()

router
    .get('/cliente', isAdmin(2), clienteIndex)
    .post('/cliente', clienteCreate)
    .post('/cliente/new', usuarioSenha)

    .get('/adm', isAdmin(3), AdmIndex)
    .post('/adm', isAdmin(3), createAdm)
    .post('/adm/login', loginAdm)

    .get('/agendamento', agendaindex)
    .post('/agendamento', agendamentoMark)

    .get('/anamnese', anamneseIndex)
    .post('/anamnese', anamneseCreate)

    .get('/servicos', servicoIndex)
    .post('/servicos', servicoCreate)
    .put('/servicos/:id', servicoUpdate)
    .delete('/servicos/:id', servicoDelete)



export default router
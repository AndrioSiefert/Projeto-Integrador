import { Router } from "express"

import { clienteIndex, clienteCreate, clienteSenha, clienteLogin } from "./Controller/clienteController.js"
import { AdmIndex, createAdm, loginAdm } from "./Controller/admController.js"
import { agendaindex, agendamentoMark } from "./Controller/agendamentoController.js"
import { anamneseCreate, anamneseIndex } from "./Controller/anamneseControlelr.js"
import { servicoCreate, servicoDelete, servicoIndex, servicoShow, servicoUpdate } from "./Controller/servicoController.js"
import { produtoCreate, produtoIndex } from "./Controller/produtoController.js"
import { feedbackCreate, feedbackDelete, feedbackIndex } from "./Controller/feedbackController.js"

import { isAdmin } from "./middlewares/admPermission.js"

const router = Router()

router
    .get('/cliente', isAdmin(2), clienteIndex)
    .post('/cliente', clienteCreate)
    .post('/cliente/login', clienteLogin)
    .post('/cliente/new', clienteSenha)


    .get('/adm', isAdmin(3), AdmIndex)
    .post('/adm', isAdmin(3), createAdm)
    .post('/adm/login', loginAdm)

    .get('/agendamento', agendaindex)
    .post('/agendamento', agendamentoMark)

    .get('/anamnese', anamneseIndex)
    .post('/anamnese', anamneseCreate)

    .get('/servicos', servicoIndex)
    .get('/servicos/:id', servicoShow)
    .post('/servicos', servicoCreate)
    .put('/servicos/:id', servicoUpdate)
    .delete('/servicos/:id', servicoDelete)

    .get('/produtos', produtoIndex)
    .post('/produtos', produtoCreate)

    .get('/feedback', feedbackIndex)
    .post('/feedback', feedbackCreate)
    .delete('/feedback/:id', feedbackDelete)



export default router
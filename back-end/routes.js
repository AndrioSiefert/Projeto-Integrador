import { Router } from 'express';

import {
  clienteIndex,
  clienteCreate,
  clienteSenha,
  clienteLogin,
} from './Controller/clienteController.js';
import { AdmIndex, createAdm, loginAdm } from './Controller/admController.js';
import {
  agendaindex,
  agendamentoMark,
} from './Controller/agendamentoController.js';
import {
  anamneseCreate,
  anamneseIndex,
  formAnamneseIndex,
} from './Controller/anamneseController.js';
import {
  servicoCreate,
  servicoDelete,
  servicoIndex,
  servicoShow,
  servicoUpdate,
} from './Controller/servicoController.js';
import {
  produtoCreate,
  produtoDelete,
  produtoIndex,
  produtoUpdate,
  produtoShow,
} from './Controller/produtoController.js';
import {
  feedbackCreate,
  feedbackDelete,
  feedbackIndex,
  feedbackShow,
  feedbackUpdate,
} from './Controller/feedbackController.js';

import { isAdmin } from './middlewares/admPermission.js';

const router = Router();

router
  // .get('/cliente', isAdmin(2), clienteIndex)
  .get('/cliente', clienteIndex)
  .post('/cliente', clienteCreate)
  .post('/cliente/login', clienteLogin)
  .post('/cliente/new', clienteSenha)

  .get('/adm', isAdmin(3), AdmIndex)
  .post('/adm', createAdm)
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
  .put('/produtos/:id', produtoUpdate)
  .delete('/produtos/:id', produtoDelete)
  .get('/produtos/:id', produtoShow)

  .get('/feedback', feedbackIndex)
  .get('/feedback/:id', feedbackShow)
  .post('/feedback', feedbackCreate)
  .delete('/feedback/:id', feedbackDelete)
  .put('/feedback/:id', feedbackUpdate)

  // FORM ANAMNESE
  .get('/formAnamnse', formAnamneseIndex);

export default router;

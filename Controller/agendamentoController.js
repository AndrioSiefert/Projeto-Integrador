import { Agendamento } from '../models/Agendamento.js'
import { Cliente } from '../models/Cliente.js'


export const agendaindex = async (req, res) => {
  try {
    const agenda = await Agendamento.findAll();
    req.status(200).json(agenda);
  } catch (error) {
    req.status(400).send(error);
  }
}




export const agendamentoMark = async (req, res) => {

  // TAREFAS PARA FAZER:

  // PODER MARCAR NO MESMO DIA EM HORARIOS DIFERENTES
  // O MESMO CLIENTE NÃO PODE ADICIONAR MAIS DE UM AGENDAMENTO QUANDO ELE JÁ TEM UM MARCADO
  // EXPIRAR O DIA DELE QUANDO O DIA PASSAR
  // ACRESCENTAR HORARIO NO AGENDAMENTO
  // VINCULAR COM CALENDARIO DO FRONT-END



  const mes = req.body.mes;
  const dia = req.body.dia;
  const clienteId = req.body.clienteId
  if (!mes || !dia || !clienteId) {
    res.status(400).json({ msg: "Preencha todos os campos" });
    return;
  }

  try {
    const data = await Agendamento.findOne({ where: { mes: mes, dia: dia } });

    if (data) {
      res.status(400).json({ msg: "Data já marcada" });
      return;
    }

    const cliente = await Cliente.findByPk(clienteId);

    if (!cliente) {
      res.status(400).json({ msg: "Cliente não encontrado" });
      return;
    }

    const agenda = await Agendamento.create({ mes: mes, dia: dia, agendamento_cliente_id: clienteId });
    res.status(201).json(agenda);
  } catch (error) {
    res.status(400).send(error);
  }
};
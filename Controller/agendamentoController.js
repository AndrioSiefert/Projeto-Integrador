import { Agendamento } from '../models/Agendamento.js'
import { Cliente } from '../models/Cliente.js'


export const agendaindex = async (req, res) => {
  try {
    const agenda = await Agendamento.findAll();
    res.status(200).json(agenda);
  } catch (error) {
    res.status(400).send(error);
  }
}




export const agendamentoMark = async (req, res) => {

  const mes = req.body.mes;
  const dia = req.body.dia;
  const horas = req.body.horas;
  const clienteId = req.body.clienteId
  if (!mes || !dia || !horas || !clienteId) {
    res.status(400).json({ msg: "Preencha todos os campos" });
    return;
  }

  try {
    const clienteAgendado = await Agendamento.findOne({ where: { agendamento_cliente_id: clienteId } });
    if (clienteAgendado) {
      res.status(400).json({ msg: "Cliente já possui agendamento" });
      return;
    }

    const data = await Agendamento.findOne({ where: { mes: mes, dia: dia, horas: horas } });
    if (data) {
      res.status(400).json({ msg: "Data já marcada" });
      return;
    }

    const cliente = await Cliente.findByPk(clienteId);

    if (!cliente) {
      res.status(400).json({ msg: "Cliente não encontrado" });
      return;
    }

    const agenda = await Agendamento.create({ horas: horas, mes: mes, dia: dia, agendamento_cliente_id: clienteId });
    res.status(201).json(agenda);
  } catch (error) {
    res.status(400).send(error);
  }
};
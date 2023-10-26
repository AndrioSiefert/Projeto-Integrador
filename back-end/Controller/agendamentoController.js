import { Agendamento } from './models/Agendamento.js'


export const agendaindex = async (req, res) => {
  try {
    const agenda = await Agendamento.findAll();
    req.status(200).json(agenda);
  } catch (error) {
    req.status(400).send(error);
  }
}




export const agendamentoMark = async (req, res) => {
  // CRIAÇÃO DO AGENDAMENTO;
  // SE O AGENDAMENTO ESTIVER JÁ MARCADO NÃO IRÁ DEIXAR MARCAR
  const mes = req.body.mes;
  const dia = req.body.dia;

  const data = new Date(mes + "-" + dia);


  const dataDisponivel = await Agendamento.findOne({ where: { diaAgendado: data, disponivel: true } });

  if (dataDisponivel) {
    const agendamento = await Agendamento.create({ DiaAgendado: data, disponivel: false });

    await agendamento.setCliente(req.user.id);

  } else {
    res.status(400).json({ mensagem: "Data não disponível para agendamento" });
  }
};






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
  

    const agendamento = await Agendamento.create({
      DiaAgendado: data
    });
  
    // MARCA A DATA INDISPONIVEL PARA OUTROS USUARIOS
    await Agendamento.update({ disponivel: false }, { where: { id: agendamento.id } });
  

    await agendamento.setCliente(req.user.id);
  

    res.status(200).json({
      mensagem: "Agendamento realizado com sucesso!"
    });
  };

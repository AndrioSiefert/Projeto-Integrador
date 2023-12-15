import { Servico } from '../models/Servico.js';


export const servicoIndex = async (req, res) => {
    try {
        const servicos = await Servico.findAll();
        res.status(200).json(servicos);
    } catch (error) {
        res.status.send(error);
    }
}


export const servicoCreate = async (req, res) => {
    const { nome, descricao, preco } = req.body;

    try {
        const servico = await Servico.create({ nome, descricao, preco });
        res.status(201).json({ servico, msg: "Serviço criado com sucesso" });
    } catch (error) {
        res.status(400).send(error);
    }
}

export const servicoUpdate = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;

    try {
        const servico = await Servico.update({ nome, descricao, preco }, { where: { id } });
        res.status(200).json({ servico, msg: "Serviço atualizado com sucesso" });
    } catch (error) {
        res.status(400).send(error);
    }
}
export const servicoDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const servico = await Servico.destroy({ where: { id } });
        res.status(200).json({ servico, servico: id, msg: "Serviço deletado com sucesso" });
    } catch (error) {
        res.status(400).send(error);
    }
}


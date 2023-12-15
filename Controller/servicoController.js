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
        const servico = await Servico.findOne({ where: { id: id } });

        if (!servico) {
            res.status(404).json({ msg: "Serviço não encontrado" });
        }


        await Servico.update({ nome, descricao, preco }, { where: { id: id } });

        const servicoAtualizado = await Servico.findByPk(id);    // MOSTRA A NOVA ATUALIZAÇÃO DO SERVIÇO

        res.status(200).json({ servico: servicoAtualizado, msg: "Serviço atualizado com sucesso" });
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}
export const servicoDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const servico = await Servico.findOne({ where: { id: id } });

        if (!servico) {
            return res.status(404).json({ msg: "Serviço não encontrado" });
        }

        await Servico.destroy({ where: { id: id } });

        res.status(200).json({ servico, msg: "Esse serviço foi deletado com sucesso" });
    } catch (error) {
        res.status(400).send(error);
    }
}


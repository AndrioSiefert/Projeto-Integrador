import { FeedBack } from "../models/FeedBack.js";
import { Cliente } from "../models/Cliente.js";
import { Servico } from "../models/Servico.js";

export const feedbackIndex = async (req, res) => {
    try {
        const feedback = await FeedBack.findAll();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const feedbackShow = async (req, res) => {
    const { id } = req.params;

    try {
        const feedback = await FeedBack.findByPk(id);
        res.status(200).json(feedback);
    } catch (error) {
        res.status.json(error)
    }
}

export const feedbackCreate = async (req, res) => {
    const { mensagem, cliente_id, servico_id } = req.body;

    if (!mensagem || !cliente_id || !servico_id) {
        return res.status(400).json({ id: 0, msg: "Coloque uma mensagem para enviar" })
    }

    try {
        const clienteExistente = await Cliente.findByPk(cliente_id);
        const servicoExistente = await Servico.findByPk(servico_id);

        if (!clienteExistente || !servicoExistente) {
            console.log("Cliente ou serviço não encontrado");
            return res.status(400).json({ id: 0, msg: "Cliente ou serviço não encontrado" });
        }

        const novoFeedBack = await FeedBack.create({ mensagem, cliente_id, servico_id, status: false });
        res.status(201).json({ novoFeedBack, msg: "Feedback enviado com sucesso" });
    } catch (error) {
        res.status(500).send(error);
    }
}



export const feedbackDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const feedback = await FeedBack.destroy({ where: { id } });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const feedbackStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const feedback = await FeedBack.update({ status }, { where: { id } });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const confirmFeedback = async (req, res) => {
    try {
        const { id } = req.params;

        const feedback = await FeedBack.findByPk(id);

        if (!feedback) {
            return res.status(404).json({ error: 'Feedback não encontrado' });
        }

        feedback.status = true;
        await feedback.save();

        return res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao confirmar feedback' });
    }
}

export const feedbackUpdate = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const feedback = await FeedBack.update({ status }, { where: { id } });
        res.status(200).json({ feedback, msg: "Feedback atualizado com sucesso" })
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar feedback' });
    }
}



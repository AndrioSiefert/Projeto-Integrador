import { FeedBack } from "../models/FeedBack.js";

export const feedbackIndex = async (req, res) => {
    try {
        const feedback = await FeedBack.findAll();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const feedbackCreate = async (req, res) => {
    const { menssagem } = req.body;
    const feedback_cliente_id = req.id_logged;

    if (!menssagem || !feedback_cliente_id) {
        res.status(400).json({ id: 0, msg: "Coloque uma mensagem para enviar" })
    }


    try {
        const novoFeedBack = await FeedBack.create({ menssagem, feedback_cliente_id });
        res.status(201).json(novoFeedBack);
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




// export const feedbackStatusIndex = async (req, res) => {
//     try {
//         const feedback = await FeedBack.findAll({ where: { status: true } });
//         res.status(200).json(feedback);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }


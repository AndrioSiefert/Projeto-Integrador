import { Anamnese } from "../models/Anamnese.js";



export const anamneseIndex = async (req, res) => {
    try {
        const anamnese = await Anamnese.findAll();
        res.status(200).json(anamnese);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const anamneseCreate = async (req, res) => {
    const { nome, sexo, dataNascimento, cpf, endereco, cidade, telefone, email } = req.body;

    if (!nome || !sexo || !dataNascimento || !cpf || !endereco || !cidade || !telefone) {
        res.status(400).json({ id: 0, msg: "Erro... Informe os dados" });
        return;
    }

    try {
        const anamnese = await Anamnese.create({ nome, sexo, dataNascimento, cpf, endereco, cidade, telefone, email });
        res.status(201).json(anamnese);
    } catch (error) {
        res.status(400).send(error);
    }
}


export const anamneseUpdate = async (req, res) => {
    const { id } = req.params;
    const { nome, sexo, dataNascimento, cpf, endereco, cidade, telefone, email } = req.body;

    if (!nome || !sexo || !dataNascimento || !cpf || !endereco || !cidade || !telefone) {
        res.status(400).json({ id: 0, msg: "Erro... Informe os dados" });
        return;
    }

    try {
        const anamnese = await Anamnese.findOne({ where: { id: id } });

        if (!anamnese) {
            return res.status(404).json({ msg: "Anamnese não encontrada" });
        }

        await Anamnese.update({ nome, sexo, dataNascimento, cpf, endereco, cidade, telefone, email }, { where: { id: id } });
        res.status(200).json({ anamnese, msg: "Anamnese atualizada com sucesso" });
    } catch (error) {
        res.status(400).send(error);
    }
}

export const anamneseDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const anamnese = await Anamnese.findOne({ where: { id: id } });

        if (!anamnese) {
            return res.status(404).json({ msg: "Anamnese não encontrada" });
        }

        await Anamnese.destroy({ where: { id: id } });
        res.status(200).json({ anamnese, msg: "Anamnese deletada com sucesso" });
    } catch (error) {
        res.status(400).send(error);
    }
}


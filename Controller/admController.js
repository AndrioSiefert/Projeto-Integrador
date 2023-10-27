import { Admin } from '../models/Admin.js'

export const AdmIndex = async (req, res) => {
    try {
        const adm = await Admin.findAll();
        res.status(200).json(adm);
    } catch (error) {
        res.status(400).send(error);
    }
}



export const createAdm = async (req, res) => {
    const { login, senha } = req.body

    if (!login, !senha) {
        res.status(400).json({ id: 0, alert: "Coloque senha e login para criar sua conta" })
    }


    try {
        const novoAdmin = await Admin.create({ login, senha });
        res.status(201).json(novoAdmin);
    } catch (error) {
        res.status(500).send(error);
    }
}


export const loginAdm = async (req, res) => {
    const { login, senha } = req.body;

    if (!login || !senha) {
        res.status(400).json({ id: 0, msg: "Acesso Negado" });
        return;
    }

    try {
        const admin = await Admin.findOne({ where: { login, senha } });
        if (admin) {
            res.status(200).json({ id: admin.id, msg: "Login Bem-Sucedido" });
        } else {
            res.status(401).json({ id: 0, msg: "Acesso Negado" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


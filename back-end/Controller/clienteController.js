import bcrypt from 'bcrypt';
import { Cliente } from './models/Cliente.js';

export const clienteIndex = async (res) => {
    try {
        const cliente = await Cliente.findAll();
        res.status(200).json(cliente)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const clienteCreate = async (req, res) => {
    const { nome, email, senha, telefone, cpf } = req.body


    if (!nome || !email || !senha || !telefone || !cpf) {
        res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
        return
    }


    try {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const senhaString = senha.toString();
        const hash = bcrypt.hashSync(senhaString, salt);
        // console.log(salt + "\n" + hash);
        const cliente = await Cliente.create({
            nome, email, senha: hash, telefone, cpf
        });
        res.status(201).json(cliente)
    } catch (error) {
        res.status(400).send(error)
    }



}

import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

import { Cliente } from '../models/Cliente.js';

dotenv.config();


export const clienteIndex = async (res) => {
    try {
        const cliente = await Cliente.findAll();
        res.status(200).json(cliente)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const clienteCreate = async (req, res) => {
    const { usuario, email, senha, telefone, cpf } = req.body


    if (!usuario || !email || !senha || !telefone || !cpf) {
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
            usuario, email, senha: hash, telefone, cpf
        });
        res.status(201).json(cliente)
    } catch (error) {
        res.status(400).send(error)
    }

};





const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seu_email@gmail.com',  //AJUSTAR FUTURAMENTE
        pass: 'sua_senha',          // AJUSTAR FUTURAMENTE
    },
});


export const usuarioSenha = async (req, res) => {
    const { email, senha, novaSenha } = req.body;

    if (!email || !senha || !novaSenha) {
        res.status(400).json({ id: 0, msg: 'Erro... Informe os dados' });
        return;
    }

    try {
        const usuario = await Cliente.findOne({ where: { email } });

        if (usuario == null) {
            res.status(400).json({ erro: 'Erro... E-mail inválido' });
            return;
        }

        if (bcrypt.compareSync(senha, usuario.senha)) {
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(novaSenha, salt);
            usuario.senha = hash;

            await usuario.save();



            const token = jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: '1h' });
            const mailOptions = {
                from: 'seu_email@gmail.com',  //POR EMAIL DA EMPRESA
                to: email,
                subject: 'Token de Recuperação de Senha',
                text: `Seu token de recuperação de senha é: ${token}`,
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({ msg: 'Token enviado com sucesso' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};
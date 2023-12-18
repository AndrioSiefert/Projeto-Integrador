import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

import { Cliente } from '../models/Cliente.js';

dotenv.config();


export const clienteIndex = async (req, res) => {
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

    const verificarEmail = await Cliente.findOne({ where: { email } })

    if (verificarEmail) {
        res.status(400).json({ id: 0, msg: "Erro... E-mail já cadastrado" })
        return;
    }


    try {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const senhaString = senha.toString();
        const hash = bcrypt.hashSync(senhaString, salt);
        // console.log(salt + "\n" + hash);



        const cliente = await Cliente.create({ nome, email, senha: hash, telefone, cpf });
        res.status(201).json({ cliente, msg: "Cliente foi cadastrado com sucesso" })
    } catch (error) {
        res.status(400).send(error)
    }

};




export const clienteLogin = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        res.status(400).json({ id: 0, msg: 'Erro... Informe os dados' });
        return;
    }

    try {
        const cliente = await Cliente.findOne({ where: { email } });

        if (cliente == null) {
            res.status(400).json({ erro: 'Erro... E-mail inválido' });
            return;
        }

        if (bcrypt.compareSync(senha, cliente.senha)) {
            // const token = jwt.sign({ 
            //     user_logado_id: usuario.id,
            //     user_logado_nome: usuario.nome
            //  }, process.env.JWT_KEY, { expiresIn: '1h' });
            // res.status(200).json({ token, msg: 'Login efetuado com sucesso' });
            res.status(200).json({ id: cliente.id, nome: cliente.nome })
        } else {
            res.status(400).json({ erro: 'Erro... Senha inválida' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}









const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seu_email@gmail.com',  //AJUSTAR FUTURAMENTE
        pass: 'sua_senha',          // AJUSTAR FUTURAMENTE
    },
});


export const clienteSenha = async (req, res) => {
    const { email, senha, novaSenha } = req.body;

    if (!email || !senha || !novaSenha) {
        res.status(400).json({ id: 0, msg: 'Erro... Informe os dados' });
        return;
    }

    try {
        const cliente = await Cliente.findOne({ where: { email } });

        if (cliente == null) {
            res.status(400).json({ erro: 'Erro... E-mail inválido' });
            return;
        }

        if (bcrypt.compareSync(senha, nome.senha)) {
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(novaSenha, salt);
            nome.senha = hash;

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
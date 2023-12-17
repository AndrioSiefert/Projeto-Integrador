import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Admin } from '../models/Admin.js';

dotenv.config();

export const isAdmin = (nivelPermission) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ Erro: "Token não fornecido" });
        }

        const decode = jwt.verify(token, process.env.JWT_KEY);

        const admin = await Admin.findByPk(decode.id_logged);
        if (!admin) {
            // console.log("Administrador não encontrado");
            return res.status(403).json({ Erro: "Permissão insuficiente" });
        }

        if (admin.nivel < nivelPermission) {
            return res.status(403).json({
                Erro: "Permissão insuficiente",
                "Nível do usuário": admin.nivel,
                "Nível necessário": nivelPermission
            });
        }



        req.id_logged = decode.id_logged;
        req.nome_logged = decode.nome_logged;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Falha ao autenticar" });
    }
};

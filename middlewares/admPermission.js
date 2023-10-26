// import { Admin } from '../models/Admin.js';


// export const isAdmin = async (req, res, next) => {
//     const { login, senha } = req.body;

//     if (!login || !senha) {
//         res.status(400).json({ id: 0, msg: "Credenciais de administrador incorretas" });
//         return;
//     }

//     try {
//         const admin = await Admin.findOne({ where: { login, senha } });
//         if (!admin) {
//             res.status(401).json({ id: 0, msg: "Acesso não autorizado" });
//             return;
//         }
//         req.admin = admin;
//         next();
//     } catch (error) {
//         res.status(500).json({ id: 0, msg: "Erro no servidor" });
//     }
// };

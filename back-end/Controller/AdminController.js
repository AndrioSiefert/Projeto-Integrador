import { Admin } from './models/Admin.js'

export const AdmIndex = async (req, res) =>{
   try {
        const adm = await Admin.findAll();
        res.status(200).json(adm);
    } catch (error) {
        res.status(400).send(error);
    }
}



export const createAdm = async (req, res) => {
    const { login, senha } = req.body

    if (!login, !senha ) {
        res.status(400).json({ id: 0, alert: "Coloque senha e login para criar sua conta"})
    }
}

export const loginAdm = async (req, res) => {
    const { login, senha} = req.body

    if (!login || !senha) {
    res.status(400).json({id:0, msg: "Login Incorreto"})
    return

    }
}

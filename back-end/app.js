import express from 'express';
import cors from "cors";
import routes from './routes.js';
import { sequelize } from './databases/dados.js';
import { Anamnese } from './models/Anamnese.js';
import { Cliente } from './models/Cliente.js';
import { Admin } from './models/Admin.js';
import { Agendamento } from './models/Agendamento.js';
import { Produto } from './models/Produto.js';
import { Servico } from './models/Servico.js';
import { FeedBack } from './models/FeedBack.js';
import { FormAnamnese } from './models/FormAnamnese.js';




const app = express()
const port = 3004


app.use(express.json())
app.use(cors())
app.use(routes)



const conecta_db = async () => {
    try {
        await sequelize.authenticate();
        await Cliente.sync();
        await Admin.sync();
        await Agendamento.sync();
        await Anamnese.sync();
        await FormAnamnese.sync();
        await Produto.sync();
        await Servico.sync();
        await FeedBack.sync();
    }
    catch (error) {
        console.error("Erro na Conexão", error);
    }
}

conecta_db()


app.get('/', (req, res) => {
    res.send('API MASSOTERAPIA')
})

app.listen(port, () => {
    console.log(`Servidor Rodando na Porta: ${port}`)
})
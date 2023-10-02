import express from 'express'
import cors from "cors"
import routes from './routes.js'


const app = express()
const port = 3000


app.use(express.json())
app.use(cors())
app.use(routes)



const conecta_db = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão estabelecida!");
        await clienteCreate.sync()
    } catch (error) {
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
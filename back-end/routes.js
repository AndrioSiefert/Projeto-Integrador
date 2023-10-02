import { router } from "express"

import { clienteIndex, clienteCreate } from "./Controller/clienteController.js"

const router = Router()

router.get('/cliente', clienteIndex).post('/cliente', clienteCreate);

export default router
import { Produto } from '../models/produto.js';

export const produtoIndex = async (req, res) => {

    try {
        const produto = await Produto.findAll();
        res.status(200).json(produto);
    } catch (error) {
        res.status(404).send(error);
    }
}
import { Produto } from '../models/produto.js';

export const produtoIndex = async (req, res) => {

    try {
        const produto = await Produto.findAll();
        res.status(200).json(produto);
    } catch (error) {
        res.status(404).send(error);
    }
}

export const produtoCreate = async (req, res) => {
    const { nome, descricao, preco, imagem } = req.body;

    try {
        const produto = await Produto.create({ nome, descricao, preco, imagem });
        res.status(200).json(produto);
    } catch (error) {
        res.status(400).send(error);

    }
}

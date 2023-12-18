import { Produto } from '../models/produto.js';

export const produtoIndex = async (req, res) => {
  try {
    const produto = await Produto.findAll();
    res.status(200).json(produto);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const produtoCreate = async (req, res) => {
  const { nome, descricao, preco, imagem } = req.body;

  try {
    const produto = await Produto.create({ nome, descricao, preco, imagem });
    res.status(200).json(produto);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const produtoUpdate = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, imagem } = req.body;

  try {
    const produto = await Produto.update(
      { nome, descricao, preco, imagem },
      { where: { id } },
    );
    res.status(200).json(produto);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const produtoDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.destroy({ where: { id } });
    res.status(200).json(produto);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const produtoShow = async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findOne({ where: { id: id } });

    if (!produto) {
      return res.status(404).json({ msg: 'Produto não encontrado' });
    }

    res.status(200).json(produto);
  } catch (error) {
    res.status(400).send(error);
  }
};

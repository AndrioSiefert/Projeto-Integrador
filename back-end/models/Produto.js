import { DataTypes } from "sequelize";
import { sequelize } from "../databases/dados.js";

export const Produto = sequelize.define('produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
})
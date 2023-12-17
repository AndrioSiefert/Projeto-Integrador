import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/dados.js';



export const Cliente = sequelize.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    telefone: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
});



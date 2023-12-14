import { sequelize } from '../databases/dados.js';
import { DataTypes } from 'sequelize';
import { Cliente } from './Cliente.js'

export const Anamnese = sequelize.define('anamnese', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: true
    }

});

Anamnese.belongsTo(Cliente, {
    foreignKey: {
        name: 'cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
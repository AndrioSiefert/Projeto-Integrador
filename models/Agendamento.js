import { sequelize } from '../databases/dados.js';
import { DataTypes } from "sequelize";
import { Cliente } from './Cliente.js';

export const Agendamento = sequelize.define('agendamento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    mes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dia: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


});

Agendamento.belongsTo(Cliente, {
    foreignKey: {
        name: 'agendamento_cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});


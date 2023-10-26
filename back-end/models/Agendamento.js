import { sequelize } from '../databases/dados.js';
import { DataTypes } from "sequelize";
import { Cliente } from './Cliente.js';

export const Agendamento = sequelize.define('agendamento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    diaAgendado: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
    },

    disponivel: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }



})


Agendamento.belongsTo(Cliente, {
    foreignKey: {
        name: 'cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'

})
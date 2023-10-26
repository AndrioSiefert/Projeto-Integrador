import { sequelize } from '../databases/dados.js';
import { DataTypes } from 'sequelize';
import { Cliente } from './Cliente.js'

export const Anamnese = sequelize.define('anamnese', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
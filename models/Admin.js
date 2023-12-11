import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/dados.js';

export const Admin = sequelize.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    nivel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
})
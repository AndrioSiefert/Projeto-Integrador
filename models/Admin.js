import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/dados.js';

export const Admin = sequelize.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(60),
        allowNull: false
    }

})
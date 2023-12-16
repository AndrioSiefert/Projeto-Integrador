import { DataTypes } from "sequelize";
import { sequelize } from "../databases/dados.js";
import { Cliente } from "./Cliente.js";

export const FeedBack = sequelize.define('feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    menssagem: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})



FeedBack.belongsTo(Cliente, {
    foreignKey: {
        name: 'feedback_cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Cliente.hasMany(FeedBack, {
    foreignKey: {
        name: 'feedback_cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

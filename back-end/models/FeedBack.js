import { DataTypes } from "sequelize";
import { sequelize } from "../databases/dados.js";
import { Cliente } from "./Cliente.js";
import { Servico } from "./Servico.js";

export const FeedBack = sequelize.define('feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensagem: {
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
        name: 'cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Cliente.hasMany(FeedBack, {
    foreignKey: 'cliente_id'
})



FeedBack.belongsTo(Servico, {
    foreignKey: {
        name: 'servico_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})
Servico.hasMany(FeedBack, {
    foreignKey: 'servico_id'
})

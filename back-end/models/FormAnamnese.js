import { DataTypes } from 'sequelize';
import { sequelize } from "../databases/dados.js";
import { Anamnese } from './Anamnese.js';

export const FormAnamnese = sequelize.define('form_anamnese', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})

FormAnamnese.belongsTo(Anamnese, {
    foreignKey: {
        name: 'anamnese_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})





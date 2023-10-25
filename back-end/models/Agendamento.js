import { sequelize} from '../databases/dados.js';
import { DataTypes } from "sequelize";
import { Cliente } from './Cliente';

export const Agendamento = sequelize.define('agendamento', {
    id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    DiaAgendado: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
    }

    

})


Agendamento.belongsTo(Cliente, {
    foreginKey: {
        name: 'cliente_id',
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'

})
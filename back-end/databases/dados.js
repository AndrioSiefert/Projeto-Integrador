import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    "massoterapia", "root", "1100", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
});
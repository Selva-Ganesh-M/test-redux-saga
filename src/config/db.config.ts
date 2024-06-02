import { Sequelize } from "sequelize";
import envs from "./env.config";
const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} = envs
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    define: {
      freezeTableName: true
    }
});

export const dbCheck = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
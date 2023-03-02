import { Sequelize } from "sequelize";

export interface IDatabaseConnection {
    getDatabaseConnection(): Sequelize
}
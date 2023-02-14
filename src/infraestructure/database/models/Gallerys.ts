import { DataTypes } from "sequelize";
import { DatabaseConnection } from '../DatabaseConnection'

const database_connection = new DatabaseConnection()
const database = database_connection.getDatabaseConnection();

export const Gallery = database.define('Gallery', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
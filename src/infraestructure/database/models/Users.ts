import { DataTypes } from "sequelize";
import { DatabaseConnection } from '../DatabaseConnection'

const database_connection = new DatabaseConnection()
const database = database_connection.getDatabaseConnection();

export const User = database.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
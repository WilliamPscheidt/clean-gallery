import { Sequelize } from 'sequelize';
import { User } from "./models/Users";
import { Gallery } from "./models/Gallerys";

export class DatabaseConnection {
    sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize('gallery', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });
    }

    static async syncTables() {
        await User.sync();
        await Gallery.sync();
    }

    public getDatabaseConnection() {
        return this.sequelize;
    }
}
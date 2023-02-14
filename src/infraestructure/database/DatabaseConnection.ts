import { Sequelize } from 'sequelize';


export class DatabaseConnection {
    sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize('gallery', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });
    }

    public getDatabaseConnection() {
        return this.sequelize;
    }
}
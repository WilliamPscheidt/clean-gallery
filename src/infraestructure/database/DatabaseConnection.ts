import { Sequelize } from 'sequelize';
import { IDatabaseConnection } from '../../interfaces/IDatabaseConnection';

export class DatabaseConnection implements IDatabaseConnection {
    sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize('gallery', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });
    }

    public getDatabaseConnection(): Sequelize {
        return this.sequelize;
    }
}
import { Sequelize } from 'sequelize';
import { IDatabaseConnection } from '../../interfaces/IDatabaseConnection';

export class DatabaseConnection implements IDatabaseConnection {
    sequelize: Sequelize;

    constructor(test_mode?: Boolean) {
        if(test_mode) {
            this.sequelize = new Sequelize(':memory:')
        }
        
        this.sequelize = new Sequelize('gallery', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });
    }

    public getDatabaseConnection(): Sequelize {
        return this.sequelize;
    }
}
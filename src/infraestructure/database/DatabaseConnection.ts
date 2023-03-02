import { Sequelize } from 'sequelize';
import { IDatabaseConnection } from '../interfaces/IDatabaseConnection';
import { CONFIGURATIONS } from '../../configs';

export class DatabaseConnection implements IDatabaseConnection {
    sequelize: Sequelize;

    constructor(test_mode?: boolean) {
        if (test_mode) {
            this.sequelize = new Sequelize('tests_gallery', CONFIGURATIONS.database.user, CONFIGURATIONS.database.password, {
                host: 'localhost',
                dialect: 'mysql'
            });
        } else {
            this.sequelize = new Sequelize('gallery', CONFIGURATIONS.database.user, CONFIGURATIONS.database.password, {
                host: 'localhost',
                dialect: 'mysql'
            });
        }

    }

    public getDatabaseConnection(): Sequelize {
        return this.sequelize;
    }
}
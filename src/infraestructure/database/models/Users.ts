import { DataTypes, Model } from "sequelize";
import { IDatabaseConnection } from "../../interfaces/IDatabaseConnection";

interface UserAtributes {
    user_id: number,
    name: string,
    email: string,
    password: string,
}

export class UserModel extends Model<UserAtributes> {
    static model(database: IDatabaseConnection, force_update?: boolean) {
        this.init(
            {
                user_id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    unique: true,
                    autoIncrement: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
            },
            {
                sequelize: database.getDatabaseConnection(),
                modelName: 'User',
                timestamps: true,
            },

        )

        if(force_update){
            this.sync({force: true})
        }
        this.sync()
    }
}
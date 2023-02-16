import { DataTypes, Model } from "sequelize";
import { IDatabaseConnection } from "../../../interfaces/IDatabaseConnection";
import { GalleryModel } from "./Gallerys";

interface UserAtributes {
    id: number,
    name: string,
    email: string,
    password: string
}

export class UserModel extends Model<UserAtributes> {
    static model(database: IDatabaseConnection): void {
        this.init(
            {
                id: {
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
                }
            },
            {
                sequelize: database.getDatabaseConnection(),
                modelName: 'User',
                timestamps: true,
            },

        )

        GalleryModel.hasMany(UserModel, { foreignKey: 'user_id' });
    }
}
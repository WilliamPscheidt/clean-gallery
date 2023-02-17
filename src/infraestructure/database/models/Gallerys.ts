import { IDatabaseConnection } from "../../../interfaces/IDatabaseConnection";
import { DataTypes, Model } from "sequelize";
import { UserModel } from "./Users";

interface GalleryAttributes {
    id: number;
    author: string;
    title: string;
    description: string;
    link: string;
  }

  export class GalleryModel extends Model<GalleryAttributes> {
    static model(database: IDatabaseConnection): void {
      this.init(
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
          },
          author: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'email'
            }
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          link: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        {
          sequelize: database.getDatabaseConnection(),
          modelName: 'Gallery',
          timestamps: true,
        },
      );

      //this.sync({force: true})
      this.sync()
    }
  }
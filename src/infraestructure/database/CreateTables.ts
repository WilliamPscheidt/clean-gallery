import { User } from "./models/Users";
import { Gallery } from "./models/Gallerys";

export const CreateTables = async () => {
    await User.sync({ force: true });
    await Gallery.sync({ force: true });

    Gallery.belongsTo(User, { foreignKey: 'email', targetKey: 'email' })
    User.hasMany(Gallery, { foreignKey: 'email', sourceKey: 'email' })
}
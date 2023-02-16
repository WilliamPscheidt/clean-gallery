import { UserModel } from '../models/Users';
import { IDatabaseConnection } from '../../../interfaces/IDatabaseConnection';

export class UserRepository {

  private userModel: typeof UserModel;

  constructor(database: IDatabaseConnection) {
    UserModel.model(database)
    this.userModel = UserModel
  }

  public async create(data: object) {
    return await this.userModel.create(data);
  }

  public async findAll() {
    return await this.userModel.findAll();
  }

  public async findById(id: number) {
    return await this.userModel.findByPk(id);
  }

  public async update(id: number, data: object) {
    return await this.userModel.update(data, { where: {
      id
    }})
  }

  public async delete(id: number) {
    return this.userModel.destroy({
      where: {id}
    })
  }
}
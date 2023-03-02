import { UserModel } from '../models/Users';
import { IDatabaseConnection } from '../../interfaces/IDatabaseConnection';

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

  public async findByEmail(email: string) {
    return await this.userModel.findOne({
      where: {email}
    });
  }

  public async update(email: string, data: object) {
    return await this.userModel.update(data, { where: {
      email
    }})
  }

  public async delete(email: string) {
    if(email) {
      this.userModel.destroy({
        where: {email}
      })
    }
  }
}
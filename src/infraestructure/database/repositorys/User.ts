import { User } from '../models/Users';
import { IUserRepository } from '../../interfaces/IUserRepository';

export class UserRepository implements IUserRepository{
  public async create(data: any) {
    return await User.create(data);
  }

  public async findAll() {
    return await User.findAll();
  }

  public async findById(id: number) {
    return await User.findByPk(id);
  }

  public async update(id: number, data: object) {
    return await User.update(data, { where: {
      id
    }})
  }

  public async delete(id: number) {
    return User.destroy({
      where: {id}
    })
  }
}
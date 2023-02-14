import { User } from '../models/Users';

export class UserRepository {
  static async create(data: any) {
    return await User.create(data);
  }

  static async findAll() {
    return await User.findAll();
  }

  static async findById(id: number) {
    return await User.findByPk(id);
  }

  static async update(id: number, data: object) {
    return await User.update(data, { where: {
      id
    }})
  }

  static async delete(id: number) {
    return User.destroy({
      where: {id}
    })
  }
}
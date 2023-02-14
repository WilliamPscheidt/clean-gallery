import { Gallery } from "../models/Gallerys";

export class GalleryRepository {
  static async create(data: any) {
    return await Gallery.create(data);
  }

  static async findAll() {
    return await Gallery.findAll();
  }

  static async findById(id: number) {
    return await Gallery.findByPk(id);
  }

  static async update(id: number, data: object) {
    return await Gallery.update(data, { where: {
      id
    }})
  }

  static async delete(id: number) {
    return Gallery.destroy({
      where: {id}
    })
  }
}
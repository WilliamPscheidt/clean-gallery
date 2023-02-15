import { Gallery } from "../models/Gallerys";
import { IGalleryRepository } from "../../interfaces/IGalleryRepository";

export class GalleryRepository implements IGalleryRepository {
  public async create(data: any) {
    return await Gallery.create(data);
  }

  public async findAll() {
    return await Gallery.findAll();
  }

  public async findById(id: number) {
    return await Gallery.findByPk(id);
  }

  public async update(id: number, data: object) {
    return await Gallery.update(data, { where: {
      id
    }})
  }

  public async delete(id: number) {
    return Gallery.destroy({
      where: {id}
    })
  }
}
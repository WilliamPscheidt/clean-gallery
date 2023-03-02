import { GalleryModel } from "../models/Gallerys";
import { IDatabaseConnection } from "../../interfaces/IDatabaseConnection";

export class GalleryRepository{ 

  private readonly galleryModel: typeof GalleryModel;

  constructor(database: IDatabaseConnection) {
    GalleryModel.model(database)
    this.galleryModel = GalleryModel
  }
  
  public async create(data: object): Promise<object> {
    return await this.galleryModel.create(data);
  }

  public async findAll(): Promise<object> {
    return await this.galleryModel.findAll();
  }

  public async findById(id: number): Promise<object> {
    return await this.galleryModel.findByPk(id);
  }

  public async update(id: number, data: object): Promise<object> {
    return await this.galleryModel.update(data, { where: {
      id
    }})
  }

  public async delete(author: string) {
    return this.galleryModel.destroy({
      where: {author}
    })
  }
}
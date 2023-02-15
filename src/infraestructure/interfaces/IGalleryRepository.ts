export interface IGalleryRepository {
    create(data: any),
    findAll(),
    findById(id: number),
    update(id: number, data: object),
    delete(id: number)
}

/**import { Repositories } from "../Repositories";
import { GalleryRepository } from "../database/repositorys/Gallery";
import { DatabaseConnection } from "../database/DatabaseConnection";


describe("Repositories", () => {
    let galleryRepository: GalleryRepository

    beforeEach(async () => {
        const database = new DatabaseConnection(true)
        const repositories = new Repositories(database.getDatabaseConnection())
    })

    describe("GalleryRepository", () => {
        it("should create a new gallery", () => {
            
        })
    })
})**/
import { DatabaseConnection } from "./database/DatabaseConnection";
import { GalleryRepository } from "./database/repositories/Gallery";
import { UserRepository } from "./database/repositories/User";

export class Repositories {
    private galleryRepository: GalleryRepository;
    private userRepository: UserRepository
    private databaseConnection: DatabaseConnection

    constructor() {
        this.databaseConnection = new DatabaseConnection()
        
        this.galleryRepository = new GalleryRepository( this.databaseConnection );
        this.userRepository = new UserRepository( this.databaseConnection )
    }

    getGalleryRepository(): GalleryRepository {
        return this.galleryRepository
    }

    getUserRepository(): UserRepository {
        return this.userRepository
    }
}
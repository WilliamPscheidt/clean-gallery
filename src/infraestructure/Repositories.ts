import { DatabaseConnection } from "./database/DatabaseConnection";
import { GalleryRepository } from "./database/repositories/Gallery";
import { UserRepository } from "./database/repositories/User";
import { IRespositories } from "./interfaces/IRepositories";

export class Repositories implements IRespositories {
    private galleryRepository: GalleryRepository;
    private userRepository: UserRepository
    private databaseConnection: DatabaseConnection

    constructor(test_mode?: boolean) {
        if(test_mode){
            this.databaseConnection = new DatabaseConnection(true /** test_Mode */ ) 
        } else {
            this.databaseConnection = new DatabaseConnection()
        }
        
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
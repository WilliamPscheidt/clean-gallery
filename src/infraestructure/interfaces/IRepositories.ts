import { GalleryRepository } from "../database/repositories/Gallery";
import { UserRepository } from "../database/repositories/User";

export interface IRespositories {
    getGalleryRepository(): GalleryRepository,
    getUserRepository(): UserRepository,
}
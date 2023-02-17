
import { GalleryRepository } from "../database/repositories/Gallery";
import { UserRepository } from "../database/repositories/User";
import { DatabaseConnection } from "../database/DatabaseConnection";

describe("Repositories", () => {
    let userRepository: UserRepository
    let galleryRepository: GalleryRepository
    
    beforeEach(async () => {
        const database = new DatabaseConnection(true /** Test_mode activated */)

        userRepository = new UserRepository(database)
        galleryRepository = new GalleryRepository(database)
    })

    describe("UserRepository", () => {
        it("should create a new user", async () => {
            await userRepository.delete("foo@example.com")

            const user = {
                name: "test user",
                email: "foo@example.com",
                password: "password"
            }

            const createdUser = await userRepository.create(user)

            expect(createdUser).toMatchObject(user);
        })
    })

    describe("GalleryRepository", () => {
        it("should create a new gallery", async () => {
            await userRepository.delete("foo@example.com")
            await galleryRepository.delete("foo@example.com")

            const user = {
                name: "test user",
                email: "foo@example.com",
                password: "password"
            }

            await userRepository.create(user)

            const gallery = {
                author: "foo@example.com",
                title: "test",
                description: "test",
                link: "test"
            }

            const createdGallery = await galleryRepository.create(gallery)

            expect(createdGallery).toMatchObject(gallery)
        })
    })
})
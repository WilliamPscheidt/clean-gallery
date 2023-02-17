import { Repositories } from "../Repositories";
import { GalleryRepository } from "../database/repositories/Gallery";
import { UserRepository } from "../database/repositories/User";

describe("Repositories", () => {
    let galleryRepository: GalleryRepository
    let userRepository: UserRepository

    beforeEach(async () => {
        const repositories = new Repositories(true)
        galleryRepository = repositories.getGalleryRepository()
        userRepository = repositories.getUserRepository()
    })

    describe("UserRepository", () => {
        it("should create a new user", async () => {
            const verifyIfUserExists = await userRepository.findByEmail("foo@example.com")

            if(verifyIfUserExists) {
                console.log("executando isso")
                await userRepository.delete("foo@example.com")
            }

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

            const gallery = {
                author: "foo@example.com",
                title: "Test Gallery",
                description: "This is a test gallery",
                link: "https://example.com/test-gallery",
            }

            const createdGallery = await galleryRepository.create(gallery);

            expect(createdGallery).toMatchObject(gallery);
        })
    })
})
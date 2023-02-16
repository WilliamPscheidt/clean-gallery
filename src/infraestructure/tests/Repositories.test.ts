import { Repositories } from "../Repositories";
import { GalleryRepository } from "../database/repositorys/Gallery";
import { UserRepository } from "../database/repositorys/User";

describe("Repositories", () => {
    let galleryRepository: GalleryRepository
    let userResporitory: UserRepository

    beforeEach(async () => {
        const repositories = new Repositories(true)
        galleryRepository = repositories.getGalleryRepository()
        userResporitory = repositories.getUserRepository()
    })

    describe("UserRepository", () => {
        it("should create a new user", async () => {
            const user = {
                name: "test user",
                email: "foo@example.com",
                password: "password"
            }

            const createdUser = await userResporitory.create(user)

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
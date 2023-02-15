import { ICryptography } from '../../interfaces/ICryptography'

describe('Cryptography tests', () => {
    let cryptography: ICryptography

    describe('hash password', () => {
        it("Must return a string", async () => {
            const hash = await cryptography.hash("password")
            expect(typeof hash).toBe('string')
        })
    })
})
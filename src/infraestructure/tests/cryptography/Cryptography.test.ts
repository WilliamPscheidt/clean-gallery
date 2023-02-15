import { Cryptography } from "../../cryptography/Cryptography";


describe('Cryptography', () => {
    const cryptography = new Cryptography()

    describe('hash', () => {
        test('Hash must return a string', async () => {
            const hashedPassword = await cryptography.hash("password");
            expect(typeof(hashedPassword)).toBe('string')
        })
    
        test('Hashs must be different', async () => {
            const hashedPasswordOne = await cryptography.hash("passwordOne")
            const hashedPasswordTwo = await cryptography.hash("passwordTwo")
            expect(hashedPasswordOne).not.toBe(hashedPasswordTwo)
        })
    })

    describe('descrypt', () => {
        test('Must return true to correspondent password & hash', async () => {
            const hash = await cryptography.hash("password")
            const result = await cryptography.decrypt("password", hash)
            expect(result).toBe(true)
        })

        test('Must return false to incorrect password', async () => {
            const hash = await cryptography.hash("password")
            const result = await cryptography.decrypt("incorrectPassword", hash)
            expect(result).toBe(false)
        })

        test('Must return false to incorrect hash', async () => {
            const hash = 'invalid_hash'
            const result = await cryptography.decrypt("password", hash)
            expect(result).toBe(false)
        })
    })
})
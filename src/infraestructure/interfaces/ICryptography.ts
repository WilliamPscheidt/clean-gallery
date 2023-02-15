export interface ICryptography {
    hash(password: string): Promise<string>,
    decrypt(password: string, hash: string): Promise<Boolean>
}
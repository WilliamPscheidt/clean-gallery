import bcrypt from 'bcrypt';

export class Cryptography {
    private salt_rounds = 10;

    public async hash(password: string): Promise<string> {
        return bcrypt.hash(password, this.salt_rounds)
    }

    public async decrypt(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
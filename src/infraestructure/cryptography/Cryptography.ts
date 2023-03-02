import bcrypt from 'bcrypt';
import { ICryptography } from '../interfaces/ICryptography';

export class Cryptography implements ICryptography {
    private salt_rounds = 10;

    public async hash(password: string): Promise<string> {
        return bcrypt.hash(password, this.salt_rounds)
    }

    public async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
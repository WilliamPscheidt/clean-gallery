import { ICryptography } from "./infraestructure/interfaces/ICryptography";

class Teste {
    constructor(private readonly cryptographyService: ICryptography) {}

    async teste(password: string): Promise<String> {
        const hashedPassword = await this.cryptographyService.hash(password)
        return hashedPassword
    }
}

const abc = new Teste();
abc.teste("Minha senha")
import { AccountRegister } from "../domain/accountRegister.usecase"
import { Repositories } from "../infraestructure/Repositories"
import { Cryptography } from "../infraestructure/cryptography/Cryptography"

type IRegisterUser = {
    name: string,
    email: string,
    password: string
}

export class RegisterUser {
    accountRegister: AccountRegister
    cryptography: Cryptography

    constructor() {
        this.accountRegister = new AccountRegister()
        this.cryptography = new Cryptography()
    }

    public async handle(data: IRegisterUser) {
        const repository = new Repositories().getUserRepository()

        try {
            this.accountRegister.usecase(data)
        } catch (error) {
            throw error
        }

        try {
            await repository.create({
                "name": data.name,
                "password": await this.cryptography.hash(data.password),
                "email": data.email
            })
        } catch (error) {
            throw error
        }
    }
}
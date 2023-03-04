import { AccountRegister } from "../domain/accountRegister.usecase"
import { Repositories } from "../infraestructure/Repositories"

type IRegisterUser = {
    name: string,
    email: string,
    password: string
}

export class RegisterUser {
    static handle(data: IRegisterUser) {
        const accountRegister = new AccountRegister()
        const repository = new Repositories().getUserRepository()
        

        try {
            accountRegister.usecase(data)
        } catch (error) {
            throw error
        }

        try {
            repository.create(data)
        } catch (error) {
            throw error
        }
    }
}
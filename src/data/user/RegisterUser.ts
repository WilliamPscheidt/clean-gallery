interface IRegisterUser {
    name: string,
    email: string,
    password: string
}

class RegisterUser {
    static handle(data: IRegisterUser) {
        // validar entrada (criar use_case)
    }
}
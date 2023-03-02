interface IData {
    "email": string,
    "password": string
}

interface IAccountLogin {
    usecase(AccountLoginData: IData): void
}

export class AccountLogin implements IAccountLogin {
    public usecase(AccountLoginData: IData): void {
        if(!AccountLoginData.email){
            throw "You need to specify a email"
        }

        if(!AccountLoginData.password){
            throw "You need to specify a password"
        }
    }
}   
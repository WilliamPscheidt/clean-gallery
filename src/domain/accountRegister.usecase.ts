interface IData {
    "name": string,
    "email": string,
    "password": string
}

interface IAccountRegister {
    usecase(AccountRegisterData: object): void;
}

export class AccountRegister implements IAccountRegister {
    private REGEX_CHECK_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*\s).{8,}$/;
    private REGEX_CHECK_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    public usecase(AccountRegisterData: IData): void {
        if(!AccountRegisterData.name) {
            throw "You need a account login name";
        }

        if(!AccountRegisterData.email) {
            throw "You nedd a email to register an account";
        }

        if(!AccountRegisterData.password) {
            throw "You need a password";
        }

        if(!AccountRegisterData.password.match(this.REGEX_CHECK_PASSWORD)){
            throw "Invalid password provided";
        }

        if(!AccountRegisterData.email.match(this.REGEX_CHECK_EMAIL)){
            throw "Invalid email provided"
        }
    }
}
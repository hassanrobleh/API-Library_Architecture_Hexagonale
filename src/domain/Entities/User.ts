export interface IUser {
    id?: number
    email: string,
    password: string
    firstName: string,
    lastName: string,
}

export class UserDTO implements IUser {
    id?: number
    constructor(
        readonly email: string,
        readonly password: string,
        readonly firstName: string,
        readonly lastName: string,
    ){}
} 
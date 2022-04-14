import { ValidationError } from 'class-validator';
import { UserDTO } from '../Entities/User';

export interface IUserRepository {

    addUser(user: UserDTO): Promise<string | ValidationError[]>
    getUser(email: string): Promise<UserDTO>
    getUsers(): Promise<UserDTO[]>
    updateUser(id: number, body: UserDTO): Promise<string>
    deleteUser(id: number): Promise<string>

}
import { UserProvider } from "../providers/UserProvider"
import { AddUser } from '../../../domain/Application/User/UseCase/AddUser/AddUser';
import { GetUser } from "../../../domain/Application/User/UseCase/GetUser/GetUser";
import { GetUsers } from "../../../domain/Application/User/UseCase/GetUsers/GetBooks";
import { UpdateUser } from "../../../domain/Application/User/UseCase/UpdateUser/UpdateUser";
import { DeleteUser } from "../../../domain/Application/User/UseCase/DeleteUser/DeleteUser";
import { Login } from '../../../domain/Application/User/UseCase/Login/Login';

export const provider = new UserProvider()

const addUserAdapter = new AddUser(provider)
const getUserAdapter = new GetUser(provider)
const getUsersAdapter = new GetUsers(provider)
const loginAdapter = new  Login(provider)
const updateUserAdapter = new UpdateUser(provider)
const deleteUserAdapter = new DeleteUser(provider)

export {
    addUserAdapter,
    getUserAdapter,
    getUsersAdapter,
    loginAdapter,
    updateUserAdapter,
    deleteUserAdapter
}
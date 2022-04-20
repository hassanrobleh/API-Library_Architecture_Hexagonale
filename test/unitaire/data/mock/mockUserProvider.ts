import { IUserRepository } from '../../../../src/domain/Repository/UserRepository';
import { users, user } from '../userData';


export class MockUserProvider implements IUserRepository {

    async addUser() {
       return Promise.resolve('new user')
    }

    async getUsers() {
        return Promise.resolve(users)
    }

    async getUser() {
       return Promise.resolve(user)
    }

    async login() {
        return Promise.resolve(user)
    }

    async updateUser() {
       return Promise.resolve('update user')
    }

    async deleteUser() {
        return Promise.resolve('user deleted')
    }
}
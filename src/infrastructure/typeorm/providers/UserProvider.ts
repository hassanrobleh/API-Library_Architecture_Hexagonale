import { IUserRepository } from '../../../domain/Repository/UserRepository'
import { getRepository } from 'typeorm'
import { User } from '../models/User'
import { validate } from 'class-validator'
import { UserDTO } from '../../../domain/Entities/User'

export class UserProvider implements IUserRepository {
    async addUser(user: UserDTO) {
        try {
            const newUser = getRepository(User).create(user)
            const err = await validate(newUser)

            if (err.length > 0) {
                return err
            } else {
                await getRepository(User).save(newUser)
                return 'new User'
            }
        } catch (error) {}
    }

    async getUser(id: number): Promise<UserDTO> {
        try {
            const user = await getRepository(User).findOne(id)
            if (user) {
                return user
            }
            return user
        } catch (error) {
            throw new Error(error);
            
        }
    }

    async getUsers(): Promise<UserDTO[]> {
        try {
            const users = await getRepository(User).find()
            return users
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateUser(id: number, user: UserDTO) {
        try {
            const userId = await getRepository(User).findOne(id)
            const userUpdate = await getRepository(User).merge(userId, user)
            await getRepository(User).save(userUpdate)
            return 'update user'
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteUser(id: number) {
        try {
            const userId = await getRepository(User).findOne(id)
            if (userId) {
                await getRepository(User).delete(userId)
                return 'user deleted'
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    
}

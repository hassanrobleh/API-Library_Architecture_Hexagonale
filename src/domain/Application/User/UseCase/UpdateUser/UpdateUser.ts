import { UserDTO } from '../../../../Entities/User'
import { IUserRepository } from '../../../../Repository/UserRepository'
import { UpdateUserResponse } from './UpdateUserResponse'

export class UpdateUser {
    constructor(private repository: IUserRepository) {}

    async execute(id: number, request: UserDTO) {
        try {
            const response = new UpdateUserResponse()
            const user = new UserDTO(
                request.email,
                request.password,
                request.firstName,
                request.lastName
            )
            await this.repository.updateUser(id, user)
            response.message = `Le user ${id} a bien été modifié`
            return response.message
        } catch (error) {
            throw new Error(error)
        }
    }
}

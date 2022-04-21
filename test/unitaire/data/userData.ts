import { UserDTO } from '../../../src/domain/Entities/User'

export const user: UserDTO = {
    email: 'test@test.fr',
    password: 'test',
    firstName: 'firstname',
    lastName: 'lastname',
}

export const user1: string = `${user.email}, ${user.firstName}, ${user.lastName}`

export const users: UserDTO[] = [
    {
        email: 'test@test.fr',
        password: 'test',
        firstName: 'firstname',
        lastName: 'lastname',
    },
    {
        email: 'test@test.fr',
        password: 'test',
        firstName: 'firstname',
        lastName: 'lastname',
    },
]

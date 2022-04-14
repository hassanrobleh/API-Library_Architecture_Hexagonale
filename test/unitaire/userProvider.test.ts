import { UserProvider } from '../../src/infrastructure/typeorm/providers/UserProvider';
import { user, users } from './data/userData';


describe('user', () => {

    const userProvider = new UserProvider()
    
    it('add user', async () => {
        userProvider.addUser = jest.fn(() => {
            return Promise.resolve('new user')
        })
        const result = await userProvider.addUser(user)
        expect(result).toBe('new user')
    })

    it('get all user', async () => {
        userProvider.getUsers = jest.fn(() => {
            return Promise.resolve(users)
        })
        const result = await userProvider.getUsers()
        expect(result).toEqual(users)       
    })

    it('getByEmail', async () => {
        userProvider.getUser = jest.fn(() => {
            return Promise.resolve(user)
        })
        const result = await userProvider.getUser('test@test.fr')
        expect(result).toEqual(user)       
    })

    it('update user', async () => {
        userProvider.updateUser = jest.fn(() => {
            return Promise.resolve('user updated')
        })
        const result = await userProvider.updateUser(1, user)
        expect(result).toBe('user updated')       
    })

    it('deleted user', async () => {
        userProvider.deleteUser = jest.fn(() => {
            return Promise.resolve('user deleted')
        })
        const result = await userProvider.deleteUser(1)
        expect(result).toBe('user deleted')       
    })
})
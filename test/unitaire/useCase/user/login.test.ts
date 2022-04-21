import { MockUserProvider } from '../../data/mock/mockUserProvider'
import { Login } from '../../../../src/domain/Application/User/UseCase/Login/Login'
import { user } from '../../data/userData'

describe('Login', () => {
    const mockUserProvider = new MockUserProvider()
    const login = new Login(mockUserProvider)
    it('signin', async () => {
        const result = await login.execute('test@gmail.com')
        expect(result).toEqual(user)
    })
})

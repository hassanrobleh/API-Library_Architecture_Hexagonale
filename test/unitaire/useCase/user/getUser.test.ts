import { MockUserProvider } from '../../data/mock/mockUserProvider';
import { GetUser } from '../../../../src/domain/Application/User/UseCase/GetUser/GetUser';
import { user } from '../../data/userData';



describe('get user', () => {

    const mockUserProvider = new MockUserProvider()
    const getUser = new GetUser(mockUserProvider)
    it('getByEmail', async () => {
        const result = await getUser.execute('test@test.fr')  
        expect(result).toEqual(user)
    })
})
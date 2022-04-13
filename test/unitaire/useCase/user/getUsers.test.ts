import { MockUserProvider } from '../../data/mock/mockUserProvider';
import { GetUsers } from '../../../../src/domain/Application/User/UseCase/GetUsers/GetBooks';
import { users } from '../../data/userData';


describe('get all users', () => {

    const mockUserProvider = new MockUserProvider()
    const getUsers = new GetUsers(mockUserProvider)
    it('getUsers', async () => {
        const result = await getUsers.execute()
        expect(result.users).toEqual(users)
    })
})
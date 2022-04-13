import { DeleteUser } from '../../../../src/domain/Application/User/UseCase/DeleteUser/DeleteUser';
import { MockUserProvider } from '../../data/mock/mockUserProvider';

describe('get user', () => {
    const mockUserProvider = new MockUserProvider()
    const deleteUser = new DeleteUser(mockUserProvider)
    it('getUser', async () => {
        const {message} = await deleteUser.execute(1)
        expect(message).toBe('Le user a bien été supprimé')
    })
})
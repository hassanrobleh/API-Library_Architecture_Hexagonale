import { MockUserProvider } from '../../data/mock/mockUserProvider';
import { UpdateUser } from '../../../../src/domain/Application/User/UseCase/UpdateUser/UpdateUser';
import { user } from '../../data/userData';



describe('update user', () => {

    const mockUSerProvider = new MockUserProvider()
    const updateUser = new UpdateUser(mockUSerProvider)
    it('update user', async () => {
        const {message} = await updateUser.execute(1, user)
        expect(message).toBe('Le user a bien été modifié')
    })
})
import { MockUserProvider } from '../../data/mock/mockUserProvider';
import { AddUser } from '../../../../src/domain/Application/User/UseCase/AddUser/AddUser';
import { user } from '../../data/userData';


describe('add user', () => {

    const mockUserProvider = new MockUserProvider()
    const addUser = new AddUser(mockUserProvider)
    it('add user', async () => {
        const { message } = await addUser.execute(user)
        expect(message).toBe('Le user a bien été ajouté')
    })
})
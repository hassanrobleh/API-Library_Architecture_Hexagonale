import { DeleteBook } from '../../../../src/domain/Application/Book/UseCase/DeleteBook/DeleteBook'
import { MockBookProvider } from '../../data/mock/mockBookProvider'

describe('get book', () => {
    const mockbookProvider = new MockBookProvider()
    const deleteBook = new DeleteBook(mockbookProvider)
    it('getbook', async () => {
        const { message } = await deleteBook.execute(1)
        console.log(message)
        expect(message).toBe('Le book a bien été supprimé')
    })
})

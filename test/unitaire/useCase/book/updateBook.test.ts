
import { UpdateBook } from '../../../../src/domain/Application/Book/UseCase/UpdateBook/UpdateBook';
import { MockBookProvider } from '../../data/mock/mockBookProvider';
import { book } from '../../data/bookData';


describe('add book', () => {

    const mockbookProvider = new MockBookProvider()
    const updateBook = new UpdateBook(mockbookProvider)
    it('add book', async () => {
        const { message } = await updateBook.execute(1, book)
        expect(message).toBe('Le book a bien été modifié')
    })
})
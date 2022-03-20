import { AddBook } from '../../../src/domain/Application/Book/UseCase/AddBook/AddBook';
import { MockBookProvider } from '../data/mock/mockBookProvider';
import { book } from '../data/bookData';


describe('add book', () => {

    const mockbookProvider = new MockBookProvider()
    const addBook = new AddBook(mockbookProvider)
    it('add book', async () => {
        const { message } = await addBook.execute(book)
        expect(message).toBe('Le book a bien été ajouté')
    })
})
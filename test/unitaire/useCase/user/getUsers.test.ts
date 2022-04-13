import { GetBooks } from '../../../../src/domain/Application/Book/UseCase/GetBooks/GetBooks';
import { MockBookProvider } from '../../data/mock/mockBookProvider';
import { book, books } from '../../data/bookData';


describe('get all books', () => {

    const mockbookProvider = new MockBookProvider()
    const getBooks = new GetBooks(mockbookProvider)
    it('getbooks', async () => {
        const result = await getBooks.execute()
        console.log(result.books)
        expect(result.books).toEqual(books)
    })
})
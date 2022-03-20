
import { GetBook } from '../../../src/domain/Application/Book/UseCase/GetBook/GetBook';
import { MockBookProvider } from '../data/mock/mockBookProvider';
import { book, books } from '../data/bookData';


describe('get book', () => {

    const mockbookProvider = new MockBookProvider()
    const getBook = new GetBook(mockbookProvider)
    it('getbook', async () => {
        const result = await getBook.execute(1)
        
        expect(result).toEqual(book)
    })
})
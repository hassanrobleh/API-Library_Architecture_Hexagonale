import { AddBook } from "../../../domain/Application/Book/UseCase/AddBook/AddBook";
import { GetBook } from "../../../domain/Application/Book/UseCase/GetBook/GetBook";
import { GetBooks } from "../../../domain/Application/Book/UseCase/GetBooks/GetBooks";
import { UpdateBook } from "../../../domain/Application/Book/UseCase/UpdateBook/UpdateBook";
import { BookProvider } from "../providers/BookProvider";
import { DeleteBook } from '../../../domain/Application/Book/UseCase/DeleteBook/DeleteBook';

export const provider = new BookProvider()

const addBookAdapter = new AddBook(provider)
const getBookAdapter = new GetBook(provider)
const getBooksAdapter = new GetBooks(provider)
const updateBookAdapter = new UpdateBook(provider)
const deleteBookAdapter = new DeleteBook(provider)

export {
    addBookAdapter,
    getBookAdapter,
    getBooksAdapter,
    updateBookAdapter,
    deleteBookAdapter
}

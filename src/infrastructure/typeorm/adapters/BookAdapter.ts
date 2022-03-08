import { AddBook } from "../../../domain/Application/Book/UseCase/AddBook/AddBook";
import { GetBook } from "../../../domain/Application/Book/UseCase/GetBook/GetBook";
import { GetBooks } from "../../../domain/Application/Book/UseCase/GetBooks/GetBooks";
import { BookProvider } from "../providers/BookProvider";

export const provider = new BookProvider()

const addBookAdapter = new AddBook(provider)
const getBookAdapter = new GetBook(provider)
const getBooksAdapter = new GetBooks(provider)

export {
    addBookAdapter,
    getBookAdapter,
    getBooksAdapter
}
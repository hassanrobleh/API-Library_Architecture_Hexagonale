import { AddBook } from "../../../domain/Application/UseCase/AddBook/AddBook";
import { BookProvider } from "../providers/BookProvider";

export const provider = new BookProvider()

const addBookAdapter = new AddBook(provider)

export {
    addBookAdapter
}
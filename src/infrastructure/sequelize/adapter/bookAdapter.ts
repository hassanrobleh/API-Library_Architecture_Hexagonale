import { bookService } from "../services/Book";
import { AddBook } from '../../domain/applications/useCases/addBook/AddBook';
import { GetBook } from '../../domain/applications/useCases/getBook/GetBook';

export const service = new bookService()

export const AddBookAdapter = new AddBook(service)
export const GetBookAdapter = new GetBook(service)




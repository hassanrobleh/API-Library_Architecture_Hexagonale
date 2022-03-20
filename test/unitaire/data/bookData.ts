import { BookDTO, IBook } from '../../../src/domain/Entities/Book'
import Book from '../../../src/infrastructure/sequelize/models/Book'

export const book: BookDTO = {
    name: 'name',
    description: 'desc',
    author: 'auth',
    releaseAt: 'real',
    imageUrl: 'image',
    fileUrl: 'file',
    approved: 0,
    userId: 1,
    categoryId: 1,
}

export const books: BookDTO[] = [
    {
        name: 'name',
        description: 'desc',
        author: 'auth',
        releaseAt: 'real',
        imageUrl: 'image',
        fileUrl: 'file',
        approved: 0,
        userId: 1,
        categoryId: 1,
    },
    {
        name: 'name',
        description: 'desc',
        author: 'auth',
        releaseAt: 'real',
        imageUrl: 'image',
        fileUrl: 'file',
        approved: 0,
        userId: 1,
        categoryId: 1,
    },
]

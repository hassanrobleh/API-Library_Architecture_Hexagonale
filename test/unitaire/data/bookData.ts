import { BookDTO } from '../../../src/domain/Entities/Book'

export const book: BookDTO = {
    name: 'name',
    description: 'desc',
    author: 'auth',
    releaseAt: new Date(2018, 8, 22),
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
        releaseAt: new Date(2018, 8, 22),
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
        releaseAt: new Date(2018, 8, 22),
        imageUrl: 'image',
        fileUrl: 'file',
        approved: 0,
        userId: 1,
        categoryId: 1,
    },
]

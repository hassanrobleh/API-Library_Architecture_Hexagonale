export interface IBook {
    name: string
    description: string
    author: string
    releaseAt: string
    imageUrl: string
    fileUrl: string
    approved: number
    userId: number
    categoryId: number
}

export class BookDTO implements IBook {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly author: string,
        readonly releaseAt: string,
        readonly imageUrl: string,
        readonly fileUrl: string,
        readonly approved: number,
        readonly userId: number,
        readonly categoryId: number
    ) {}
}

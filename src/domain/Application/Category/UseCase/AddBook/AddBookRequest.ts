export class AddBookRequest {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly author: string,
        readonly releaseAt: string,
        readonly imageUrl: string,
        readonly fileUrl: string,
        readonly approved: string,
        readonly user: number,
        readonly category: number
    ) {}
}

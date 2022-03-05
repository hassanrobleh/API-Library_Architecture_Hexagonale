
export interface IBook {
    id?: number
    name: string
    description: string
    author: string
    releaseAt: string
    imageUrl: string
    fileUrl: string
    approved: string
    // available: boolean
    createdAt?: Date;
    updatedAt?: Date;
    user: number
}

export class Book implements IBook{
    id?: number
    // available: boolean
    constructor(
        readonly name: string,
        readonly description: string,
        readonly author: string,
        readonly releaseAt: string,
        readonly imageUrl: string,
        readonly fileUrl: string,
        readonly approved: string,
        readonly user: number,
        )
    {
        // this.available = true
    }

    // changeAvailable(b: boolean) {
    //     if(this.available) {
    //         this.available = b
    //     }
    // }
} 
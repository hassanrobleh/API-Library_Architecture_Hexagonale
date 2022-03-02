export interface ICategory {
    id?: number
    name: string,
    description: string
}

export class Category implements ICategory {
    id?: number
    constructor(
        readonly name: string,
        readonly description: string
    ){}
} 
export interface ICategory {
    id?: number
    name: string,
    description: string
}

export class CategoryDTO implements ICategory {
    id?: number
    constructor(
        readonly name: string,
        readonly description: string
    ){}
} 
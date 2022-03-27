import { IsInt, IsString } from 'class-validator'

import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
// import { isDate } from 'util/types'
import { IsDateFormat } from '../utils/IsDate'
import { Category } from './Category'
import { User } from './User'

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsString()
    name: string

    @Column()
    @IsString()
    description: string

    @Column()
    @IsString()
    author: string

    @Column()
    @IsDateFormat()
    releaseAt: Date

    @Column()
    @IsString()
    imageUrl: string

    @Column()
    @IsString()
    fileUrl: string

    @Column()
    @IsInt()
    approved: number

    @Column()
    @IsInt()
    userId: number

    @Column()
    @IsInt()
    categoryId: number

    @ManyToOne(() => User, (user) => user.books)
    user: User

    @ManyToOne(() => Category, (category) => category.books)
    category: Category

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

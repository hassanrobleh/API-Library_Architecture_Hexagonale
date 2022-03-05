import {  IsInt, IsString } from 'class-validator'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm'
import { Category } from './Category';
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
    @IsString()
    releaseAt: string

    @Column()
    @IsString()
    imageUrl: string

    @Column()
    @IsString()
    fileUrl: string

    @Column()
    @IsString()
    approved: number

    @ManyToOne(() => User, user => user.books)
    user: User;

    @ManyToOne(() => Category, category => category.books)
    category: Category;
}

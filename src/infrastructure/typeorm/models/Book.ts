import { isDate, IsDate, IsInt, IsString } from "class-validator";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

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
    @IsDate()
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

    @Column()
    @IsDate()
    createdAt?: Date

    @Column()
    @IsDate()
    updatedAt?: Date

    @ManyToOne(() => User, user => user.books)
    user: User;

    @ManyToOne(() => Category, category => category.books)
    category: Category;
}

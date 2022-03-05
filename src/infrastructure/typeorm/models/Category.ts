import {Column, PrimaryGeneratedColumn, Entity, OneToMany} from "typeorm";
import { Book } from "./Book";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string

    @OneToMany(() => Book, book => book.category,  {nullable: false})
    books: Book[];

}
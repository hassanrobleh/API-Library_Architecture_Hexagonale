import { IsEmail, IsString } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Book } from './Book'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsEmail()
    email: string

    @Column()
    @IsString()
    password: string

    @Column()
    @IsString()
    firstName: string

    @Column()
    @IsString()
    lastName: string

    @OneToMany(() => Book, book => book.user,  {nullable: false})
    books: Book[];

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

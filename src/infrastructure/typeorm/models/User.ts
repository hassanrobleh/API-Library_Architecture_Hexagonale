import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Book } from './Book'

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'email', unique: true })
    @IsEmail({}, { message: 'Incorrect email' })
    @IsNotEmpty({ message: 'The email is required' })
    email: string

    @Column()
    @IsString()
    @Length(6, 30, { message: 'The password must be at least 6 but not longer than 30 characters' })
    @IsNotEmpty({ message: 'The password is required' })
    password: string

    @Column()
    @IsString()
    @Length(2, 30, { message: 'The name must be at least 2 but not longer than 30 characters' })
    @IsNotEmpty({ message: 'The name is required' })
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

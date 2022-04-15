import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator'
import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
} from 'typeorm'
import { MESSAGES, REGEX } from '../utils/utils'
import { Book } from './Book'
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    @IsEmail({ message: 'Incorrect email' })
    @IsNotEmpty({ message: 'The email is required' })
    email: string

    @Column()
    @IsString()
    @Length(6, 24)
    @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
    password: string

    @Column()
    @IsString()
    firstName: string

    @Column()
    @IsString()
    lastName: string

    @OneToMany(() => Book, (book) => book.user, { nullable: false })
    books: Book[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(password || this.password, salt)
    }
}

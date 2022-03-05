import {  IsInt, IsString } from 'class-validator'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from 'typeorm'

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

    @Column()
    @IsInt()
    user: number
}
